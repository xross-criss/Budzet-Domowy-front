import {NgbDate} from '@ng-bootstrap/ng-bootstrap';
import {TextUtil} from './text-util';

export class DateUtil {

    public static ngbDateToString(date: NgbDate): string {
        if (date === null || date === undefined) {
            return undefined;
        }
        if (typeof date === 'string') {
            return date;
        }
        return TextUtil.pad(date.year, 4) + '-'
            + TextUtil.pad(date.month, 2) + '-'
            + TextUtil.pad(date.day, 2);
    }

    public static ngbDateFromString(date: string): NgbDate {
        if (date === null || date === undefined) {
            return undefined;
        }
        const tab: string[] = date.split('-');
        return new NgbDate(
            parseInt(tab[0], 10),
            parseInt(tab[1], 10),
            parseInt(tab[2], 10)
        );
    }

}
