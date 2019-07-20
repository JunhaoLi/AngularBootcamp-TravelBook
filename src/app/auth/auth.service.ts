import { Observable, Subject, BehaviorSubject, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { User } from './user.model';
import { Router } from '@angular/router';

export class AuthResponseData {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({ providedIn: 'root'})
export class AuthService {

    user = new BehaviorSubject<User>(null);
    
    private tokenEpirationTimer: any;

    // make sure you set up email authentication in your firebase
    authKey = 'AIzaSyC-AvpfVMYfqd5VLYR8PCkIAIHQp2SSuLE';

    constructor(private http: HttpClient, private router: Router){}

    SignIn(email: string, password: string): Observable<any> {
        return this.http.post<AuthResponseData>(
            `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${this.authKey}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
        .pipe(
            catchError(this.handleError),
            tap(resData => this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn))
        );
    }

    SignUp(email: string, password: string): Observable<any> {
        return this.http.post<AuthResponseData>(
            `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${this.authKey}`,
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
        .pipe(
            catchError(this.handleError),
            tap(resData => this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn))
        );
    }

    SignOut() {
        localStorage.removeItem('userData');

        if(this.tokenEpirationTimer) {
            clearTimeout(this.tokenEpirationTimer);
        }
        this.tokenEpirationTimer = null;

        this.user.next(null);
        this.router.navigate(['/auth']);
    }

    autoSignIn(){
        const userData : {
            email: string;
            id: string;
            _token: string;
            _tokenExpirationDate: string;
        } = JSON.parse(localStorage.getItem('userData'));

        if(!userData) {
            return;
        }

        const loadedUser = new User(
            userData.email,
            userData.id,
            userData._token,
            new Date(userData._tokenExpirationDate)
        );

        // if token is not expired
        if (loadedUser.token) {
            this.user.next(loadedUser);
            const expirationDate = new Date(userData._tokenExpirationDate).getTime() - new Date().getTime();
            this.autoSignout(expirationDate);
        }
    }

    private handleError(errorResponse: HttpErrorResponse) {
        let errorMessage = 'An unknown error occured!';

        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
        }
        switch(errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email exists already';
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exist';
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'Your password is not correct';
                break;
        }
        throwError(errorMessage);
    }

    private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(email, userId, token, expirationDate);
        this.autoSignout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
        this.user.next(user);
    }

    private autoSignout(expirationDuration: number)
    {
        this.tokenEpirationTimer = setTimeout(() => {
            this.SignOut();
        }, expirationDuration);
    }
}
