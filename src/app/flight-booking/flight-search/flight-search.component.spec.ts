import { TestBed } from '@angular/core/testing';
import { FlightBookingModule } from "app/flight-booking/flight-booking.module";
import { CommonModule } from "@angular/common";
import { BASE_URL } from "app/app.tokens";
import { FlightSearchComponent } from "app/flight-booking/flight-search/flight-search.component";

import 'rxjs';
import { HttpModule } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { FlightService } from "app/flight-booking/flight-search/flight.service";


let flightServiceMock = {
    find(from: string, to: string) {
        return Observable.of([
            {
                id: 4711,
                from: 'Graz',
                to: 'Flagranti',
                date: '2017-12-24T17:00+01:00'
            },
            {
                id: 4712,
                from: 'Graz',
                to: 'Kognito',
                date: '2017-12-24T17:30+01:00'
            }
        ])
    }
}



describe('FlightSearchComponent', () => {

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                HttpModule,
                FlightBookingModule
            ],
            declarations: [
            ],
            providers: [
                {
                    provide: BASE_URL, useValue: 'http://testserver.intern/api'
                }
            ]
        }).compileComponents();

        TestBed.overrideComponent(FlightSearchComponent, {
            set: {
                providers: [{
                    provide: FlightService, 
                    useValue: flightServiceMock
                }]
            }
        }).compileComponents();

    });

    it('should have no loaded flights initially', () => { 
	    let fixture = TestBed.createComponent(FlightSearchComponent);
        let comp = fixture.componentInstance;
        expect(comp.flights.length).toBe(0);
    });

   it('should load flight for from and to', () => { 
        // SpyOn vor dem Erzeugen der Komponenten aufrufen!
        spyOn(flightServiceMock, 'find').and.callThrough();

        let fixture = TestBed.createComponent(FlightSearchComponent);
        let comp = fixture.componentInstance;
  
        comp.from = 'Hamburg';
        comp.to = 'Graz';

        comp.search();

        expect(comp.flights.length).toBe(2);
        expect(flightServiceMock.find).toHaveBeenCalled();
  });

   it('should not load flights without from and to', () => { 
	    // SpyOn vor dem Erzeugen der Komponenten aufrufen!
        spyOn(flightServiceMock, 'find').and.callThrough();

        let fixture = TestBed.createComponent(FlightSearchComponent);
        let comp = fixture.componentInstance;

        comp.from = '';
        comp.to = '';

        comp.search();

        expect(comp.flights.length).toBe(0);
        expect(flightServiceMock.find).not.toHaveBeenCalled();
  }
  ); 


});