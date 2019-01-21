import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateTravelComponent } from './create-travel/create-travel.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelDetailComponent } from './travel-list/travel-detail/travel-detail.component';
import { TravelListItemComponent } from './travel-list/travel-list-item/travel-list-item.component';
import { ToggleMenuDirective } from './shared/toggleMenu.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateTravelComponent,
    TravelListComponent,
    TravelDetailComponent,
    TravelListItemComponent,
    ToggleMenuDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
