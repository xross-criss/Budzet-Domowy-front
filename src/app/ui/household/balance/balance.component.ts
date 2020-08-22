import {Component, Input, OnInit} from '@angular/core';
import {Balance} from '../../../model/Balance';
import {BalanceType} from '../../../model/dictionary/BalanceType';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

    private predictionType: string = 'PROGNOZA';
    private generatedType: string = 'WYGENEROWANY';
    private summaryType: string = 'PODSUMOWANIE';

    @Input()
    public balances: Balance[];

    @Input()
    public className: string = 'alert-primary';

    constructor() {
    }

    ngOnInit(): void {
    }

    public translateType(type: BalanceType): string {
        if (type == 'PREDICITON') {
            return this.predictionType;
        } else if (type == 'GENERATED') {
            return this.generatedType;
        } else {
            return this.summaryType;
        }
    }

}
