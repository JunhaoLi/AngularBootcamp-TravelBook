import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { CreateTravelComponent } from './create-travel/create-travel.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './Core/Auth/auth-guard.service';
import { CanDeactivateGuard } from './shared/can-deactivate.service';
import { DataResolver } from './shared/storage/data-resolver.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, children: [
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent }
    ]},
    { path: 'create', component: CreateTravelComponent, resolve: [DataResolver], canDeactivate: [CanDeactivateGuard] },
    { path: 'history', component: TravelListComponent, resolve: [DataResolver]},
    { path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}