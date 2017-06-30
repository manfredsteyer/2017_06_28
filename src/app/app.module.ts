import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BASE_URL } from "app/app.tokens";
import { CityPipe } from "app/shared/pipes/city.pipe";
import { FlightBookingModule } from "app/flight-booking/flight-booking.module";
import { AppRouterModule } from "app/app.routes";
import { HomeComponent } from "app/home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    FlightBookingModule,
    HttpModule,
    AppRouterModule
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
