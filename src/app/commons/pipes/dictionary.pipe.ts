import {Pipe, PipeTransform} from '@angular/core';
import {BalanceType} from '../../model/dictionary/BalanceType';

export const DICTIONARY: any = {
    balanceType: {
        PREDICTION: 'Prognoza',
        GENERATED: 'Wygenerowany',
        SUMMARY: 'Podsumowanie',
    },
};

@Pipe({
    name: 'dictionary'
})
export class DictionaryPipe implements PipeTransform {

    constructor() {
    }

    public transform(code: string | number, dictionaryName: string, defaultValue: string = '---'): string {
        return DICTIONARY[dictionaryName][code] || defaultValue;
    }

}
