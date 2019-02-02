import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { CreateTravelComponent } from './create-travel/create-travel.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { AuthGuard } from './shared/auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent }
    ]},
    { path: 'create', component: CreateTravelComponent },
    { path: 'history', component: TravelListComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard]},
    { path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}