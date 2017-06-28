import { Component, OnInit } from '@angular/core';
import { Flight } from "app/entities/flight";
import { URLSearchParams, Headers, Http } from '@angular/http';

@Component({
    selector: 'flight-search',
    templateUrl: './flight-search.component.html'
})
export class FlightSearchComponent implements OnInit {
    
    //private http: Http;

    constructor(private http: Http) { 
        // this.http = http;
    }

    from: string;
    to: string;
    flights: Array<Flight> = [];
    selectedFlight: Flight;

    select(f: Flight): void {
        this.selectedFlight = f;
    }

    search(): void {
        let url = 'http://www.angular.at/api/flight';

        let headers = new Headers();
        headers.set('Accept', 'application/json');

        let search = new URLSearchParams();
        search.set('from', this.from);
        search.set('to', this.to);

        this
            .http
            .get(url, { headers, search })
            .subscribe(
                (response) => { 
                    this.flights = response.json();
                 },
                (errResponse) => { 
                    console.error('Fehler beim Laden', errResponse);
                 }
            );

    }


    ngOnInit() { 
    }
}