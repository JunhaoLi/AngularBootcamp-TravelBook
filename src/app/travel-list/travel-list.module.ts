import { NgModule } from '@angular/core';

import { TravelListComponent } from './travel-list.component';
import { TravelDetailComponent } from './travel-detail/travel-detail.component';
import { TravelListItemComponent } from './travel-list-item/travel-list-item.component';
import { TravelListRoutingModule } from './travel-list-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        TravelListComponent,
        TravelDetailComponent,
        TravelListItemComponent
    ],
    imports: [
        SharedModule,
        TravelListRoutingModule
    ],
    exports: [
        TravelListComponent,
        TravelDetailComponent,
        TravelListItemComponent
    ]
})
export class TravelListModule{}