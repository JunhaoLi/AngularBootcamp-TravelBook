import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router, private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        : Observable<boolean> | Promise<boolean> | boolean {
            return this.checkUserAuthenticated();
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> | Promise<boolean> | boolean {
        return this.checkUserAuthenticated();
    }

    checkUserAuthenticated()  : Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.isUserAuthenticated().then((isAuthenticated: Boolean) => {
            if (isAuthenticated) {
                return true;
            } else {
                this.router.navigate(['/', 'signin']);
                return false;
            }
        });
    }
}