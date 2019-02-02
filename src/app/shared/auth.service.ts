import { Observable } from 'rxjs';

export class AuthService {
    private isUserSignIn = false;

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
                resolve(true);
            }, 800);
        });
    }
}