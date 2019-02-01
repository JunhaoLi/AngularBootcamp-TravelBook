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
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent,children: [
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent}
  ]},
  {path: 'create', component: CreateTravelComponent},
  {path: 'history', component: TravelListComponent},
  {path: 'not-found', component: NotFoundComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'not-found'}
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
    ToggleMenuDirective,
    SigninComponent,
    SignupComponent,
    NotFoundComponent
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
