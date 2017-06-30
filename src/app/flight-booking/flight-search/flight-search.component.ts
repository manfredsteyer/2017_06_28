import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Flight } from 'app/entities/flight';
import { URLSearchParams, Headers, Http } from '@angular/http';
import { FlightService } from './flight.service';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    //encapsulation: ViewEncapsulation.None,
    providers: [FlightService]
})
export class FlightSearchComponent implements OnInit {
    
    //private http: Http;

    constructor(public flightService: FlightService) { 
        console.debug('Liebesgrüße aus dem Konstruktor');
    }

    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    basket: object = {
        "3": true,
    
        "5": true
    }

    select(f: Flight): void {
        this.selectedFlight = f;
    }

    search(): void {

        if (!this.from || !this.to) return;

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