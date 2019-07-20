import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ToggleMenuDirective } from './toggleMenu.directive';

@NgModule({
    declarations: [
        LoadingSpinnerComponent,
        ToggleMenuDirective
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ],
    exports: [
        LoadingSpinnerComponent,
        ToggleMenuDirective,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class SharedModule{}
