import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { CreateTravelComponent } from './create-travel/create-travel.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth/auth-guard.service';
import { CanDeactivateGuard } from './shared/can-deactivate.service';
import { DataResolver } from './shared/storage/data-resolver.service';

const appRoutes: Routes = [
    { 
        path: '',
        redirectTo: '/home',
        pathMatch: "full"
    },
    {
        path:'auth',
        redirectTo: '/home'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    { path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}