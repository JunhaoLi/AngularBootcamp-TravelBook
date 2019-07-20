import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateTravelComponent } from './create-travel.component';
import { DataResolver } from '../shared/storage/data-resolver.service';
import { AuthGuard } from '../auth/auth-guard.service';
import { CanDeactivateGuard } from '../shared/can-deactivate.service';

const createTravelRoutes: Routes = [ { 
    path: 'create',
    component: CreateTravelComponent,
    resolve: [DataResolver],
    canActivate: [AuthGuard],
    canDeactivate: [CanDeactivateGuard]
}];

@NgModule({
    imports: [RouterModule.forChild(createTravelRoutes)],
    exports: [RouterModule]
})
export class CreateTravelRoutingModule{}