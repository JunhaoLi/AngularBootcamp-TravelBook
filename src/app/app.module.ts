import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateTravelComponent } from './create-travel/create-travel.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelDetailComponent } from './travel-list/travel-detail/travel-detail.component';
import { TravelListItemComponent } from './travel-list/travel-list-item/travel-list-item.component';
import { ToggleMenuDirective } from './shared/toggleMenu.directive';
import { AuthService } from './shared/auth.service';
import { DataService } from './shared/data.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'create', component: CreateTravelComponent},
  {path: 'history', component: TravelListComponent}
];

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
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
