import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Flight } from "app/entities/flight";
import { FlightService } from "app/flight-booking/flight-search/flight.service";

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html'
})

export class FlightCardComponent implements OnInit, OnChanges {

    @Input() item: Flight;
    @Input() selected: boolean;
    @Output() selectedChange = new EventEmitter<boolean>();

    constructor() {
        console.debug('ctor', this.selected, this.item);
    }

    select() {
        this.selected = true;
        this.selectedChange.next(this.selected);
    }

    deselect() {
        this.selected = false;
        this.selectedChange.next(this.selected);
    }
   

    ngOnInit() { 
        console.debug('init', this.selected, this.item);

    }

    ngOnChanges(change) {

        // this.selectedChange.next(true);

        console.debug('changes', this.selected, this.item);
        if (change['selected']) {
            console.debug('\t selected hat sich geändert!');
        }
        if (change['item']) {
            console.debug('\t item hat sich geändert!');
        }

    }
}