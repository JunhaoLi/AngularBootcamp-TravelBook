export class AuthService {
    public isUserSignIn = false;

    SignIn() {
        this.isUserSignIn = true;
    }

    SignUp() {
        this.isUserSignIn = true;
    }

    SignOut() {
        this.isUserSignIn = false;
    }

    isUserSignedIn() {
        return this.isUserSignIn;
    }
}