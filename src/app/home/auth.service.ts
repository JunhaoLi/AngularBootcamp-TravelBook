export class AuthService {
    isUserSignIn = false;

    SignIn() {
        this.isUserSignIn = true;
    }

    SignUp() {
        this.isUserSignIn = true;
    }

    SignOut() {
        this.isUserSignIn = false;
    }
}