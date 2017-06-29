import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Flight } from "app/entities/flight";
import { FlightService } from "app/flight-booking/flight-search/flight.service";

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})

export class FlightCardComponent implements OnInit {

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }
   

    ngOnInit() { }
}