import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BASE_URL } from "app/app.tokens";
import { CityPipe } from "app/shared/pipes/city.pipe";
import { FlightBookingModule } from "app/flight-booking/flight-booking.module";

@NgModule({
  imports: [
    BrowserModule,
    FlightBookingModule,
    HttpModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: BASE_URL, useValue: 'http://www.angular.at/api'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
