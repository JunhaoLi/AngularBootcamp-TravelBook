import { NgModule } from '@angular/core';

import { CreateTravelComponent } from './create-travel.component';
import { CreateTravelRoutingModule } from './create-travel-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [CreateTravelComponent],
    imports: [
        SharedModule,
        CreateTravelRoutingModule
    ],
    exports: [CreateTravelComponent]
})
export class CreateTravelModule{}