import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from "@angular/forms";

@Directive({ 
    selector: 'input[city]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: CityValidationDirective,
            multi: true
        }
    ]
 })
export class CityValidationDirective implements Validator {

    constructor() { }

    @Input() city: string;

    validate(control: AbstractControl): object {
        
        let value = control.value;

        let validCities = this.city.split(',');

        if (validCities.indexOf(value) > -1) {
            return { };
        }

        return {
            city: {
                actual: value,
                expected: validCities,
                reason: 42,
                tryAgain: '2J'
            }
        }


    }



}