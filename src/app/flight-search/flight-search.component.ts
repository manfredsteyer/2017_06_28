import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";
import { URLSearchParams, Headers, Http } from '@angular/http';
import { FlightService } from "app/flight-search/flight.service";

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {
    
    //private http: Http;

    constructor(private flightService: FlightService) { 
        console.debug('Liebesgrüße aus dem Konstruktor');
    }

    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    select(f: Flight): void {
        this.selectedFlight = f;
    }

    search(): void {

        this.flightService
            .find(this.from, this.to)
            .subscribe(
                (flights: Array<Flight>) => { 
                    this.flights = flights;

                    // Array<Flight> === Flight[]

                 },
                (errResponse) => { 
                    console.error('Fehler beim Laden', errResponse);
                 }
            );

    }


    ngOnInit() { 
    }
}