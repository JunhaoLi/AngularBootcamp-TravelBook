import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface ICanComponentDeactivate {
    canDeactive: () => Observable<boolean> | Promise<boolean> |boolean;
}

export class CanDeactivateGuard implements CanDeactivate<ICanComponentDeactivate> {
    canDeactivate(
        component: ICanComponentDeactivate,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return component.canDeactive();
        }
}