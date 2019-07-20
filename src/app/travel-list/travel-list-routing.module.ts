import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth-guard.service';
import { TravelListComponent } from './travel-list.component';
import { DataResolver } from '../shared/storage/data-resolver.service';

const travellistRoutes: Routes = [{
    path: 'travellist',
    canActivate: [AuthGuard],
    component: TravelListComponent,
    resolve: [DataResolver]
}];

@NgModule({
    imports: [RouterModule.forChild(travellistRoutes)],
    exports: [RouterModule]
})
export class TravelListRoutingModule{}