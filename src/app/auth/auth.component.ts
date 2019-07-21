import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService, AuthResponseData } from './auth.service';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;
        if (this.isLoginMode) {
            authObs = this.authService.SignIn(email, password);
        } else {
            authObs = this.authService.SignUp(email, password);
        }

        authObs.subscribe(resData => {
            console.log(resData);
            this.isLoading = false;
            this.isLoading = false;
        }, error => {
            console.log(error);
            this.error = error;
            this.isLoading = false;
        });

        form.reset();
    }

}