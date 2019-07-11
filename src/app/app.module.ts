import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateTravelComponent } from './create-travel/create-travel.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelDetailComponent } from './travel-list/travel-detail/travel-detail.component';
import { TravelListItemComponent } from './travel-list/travel-list-item/travel-list-item.component';
import { ToggleMenuDirective } from './shared/toggleMenu.directive';
import { AuthService } from './core/auth/auth.service';
import { DataService } from './travel-list/travel-list.service';
import { SigninComponent } from './home/signin/signin.component';
import { SignupComponent } from './home/signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './core/auth/auth-guard.service';
import { CanDeactivateGuard } from './shared/can-deactivate.service';
import { LoggingInterceptor } from './shared/logging-interceptor.service';
import { AuthInterceptor } from './core/auth/auth-interceptor.service';

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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    DataService,
    CanDeactivateGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
