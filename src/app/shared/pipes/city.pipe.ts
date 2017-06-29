
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'city',
    pure: true
})
export class CityPipe implements PipeTransform {
    transform(value: any, fmt: string, lang: string): any {
        
        let short, long;

        switch(value) {
            case 'Hamburg':
                short = 'HAM';
                long = 'Airport Hamburg Fulsbüttel Helmut Schmidt';
                break;
            case 'Graz':
                short = 'GRZ';
                long = 'Flughafen Graz Thalerhof';
            break;
            case 'Nürnberg':
                short = 'NUE';
                long = 'Airport Nürnberg Albrecht Dürrer';
            break;
            default:
                short = long = 'ROM';
        }

        if (fmt == 'long') {
            return long;
        }

        return short;

    }
}