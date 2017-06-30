import { TestBed, async } from '@angular/core/testing';
import { FlightCardComponent } from './flight-card.component';
import { FlightSearchComponent } from './flight-search.component';
import { FlightBookingModule } from '../flight-booking.module';
import { HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { BASE_URL } from '../../app.tokens';

import 'rxjs/add/operator/map';
import { By } from '@angular/platform-browser';
import { FlightService } from './flight.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { Flight } from '../../entities/flight';
import { MockBackend } from '@angular/http/testing';
import { fakeAsync } from "@angular/core/testing";
import { tick } from "@angular/core/testing";

let mockData = [
  { id: 4711, from: 'Kognito', to: 'Flagranti', date:'jetzt'},
  { id: 4712, from: 'Kognito', to: 'Flagranti', date:'jetzt'},
  { id: 4713, from: 'Kognito', to: 'Flagranti', date:'jetzt'},
  { id: 4714, from: 'Kognito', to: 'Flagranti', date:'jetzt'},
  { id: 4715, from: 'Kognito', to: 'Flagranti', date:'jetzt'}
];

describe('FlightSearchComponent [with MockBackend]', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        FlightBookingModule,
        HttpModule
      ],
      declarations: [
      ],
      providers: [
        { provide: BASE_URL, useValue: 'http://www.angular.at/api' },
        { provide: XHRBackend, useClass: MockBackend }
      ]
    }).compileComponents();

  }));

  it('should search for flights with from and to', () => {

    let backend = TestBed.get(XHRBackend);

    backend.connections.subscribe(cnn => {
      console.debug('request', cnn.request);
      cnn.mockRespond(
        new Response(
          new ResponseOptions(
            {
              body: JSON.stringify(mockData)})
        ))
    })


    let fixture = TestBed.createComponent(FlightSearchComponent);
    let comp = fixture.componentInstance;
    comp.from = 'Hamburg';
    comp.to = 'Graz';
    comp.search();
    expect(comp.flights.length).toBe(5);
  });

  it( 'should put the uppercased version of the input field\'s input into'
  + 'the code element', fakeAsync(() => {

        let fixture = TestBed.createComponent(FlightSearchComponent);

  fixture.detectChanges();
  // put our test string to the input element
  let element = fixture.debugElement.query(By.css('input[name=from]')).nativeElement;
  element.value = '';
  element.dispatchEvent(new Event('input'));
  tick();
  fixture.detectChanges();

  // expect it to be the uppercase version
  console.debug('disabled', fixture.debugElement
              .query(By.css('button'))
              .nativeElement.getAttribute('disabled'));

}));
});
