
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "app/shared/shared.module";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";
import { FlightCardComponent } from "app/flight-booking/flight-search/flight-card.component";
import { FlightBookingRoutes } from "app/flight-booking/flight-booking.routes";
import { PassengerSearchComponent } from "app/flight-booking/passenger-search/passenger-search.component";
import { FlightEditComponent } from "app/flight-booking/flight-edit/flight-edit.component";


@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        SharedModule,
        FlightBookingRoutes
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent,
        PassengerSearchComponent,
        FlightEditComponent
    ],
    providers: [
        // FlightService 
    ],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule { }
