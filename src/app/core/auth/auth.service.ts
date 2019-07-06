import { Observable, Subject } from 'rxjs';

export class AuthService {
    isUserSignIn = false;

    signinStatusChanged: Subject<boolean> = new Subject<boolean>();

    SignIn(): Promise<Boolean> {
       return this.logInToServer();
    }

    SignUp(): Promise<Boolean> {
       return this.logInToServer();
    }

    SignOut() {
        this.isUserSignIn = false;
    }

    isUserSignedIn() {
        return this.isUserSignIn;
    }

    isUserAuthenticated(): Promise<Boolean> {
        return new Promise<Boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(this.isUserSignIn);
            }, 800);
        }); 
    }

    logInToServer() {
        return new Promise<Boolean>((resolve, reject) => {
            setTimeout(() => {
                this.isUserSignIn = true;
                this.signinStatusChanged.next(this.isUserSignIn);
                resolve(true);
            }, 800);
        });
    }
}