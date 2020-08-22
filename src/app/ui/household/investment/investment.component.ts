import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Investment} from '../../../model/Investment';
import {BalanceType} from '../../../model/dictionary/BalanceType';
import {InvestmentCategory} from '../../../model/dictionary/InvestmentCategory';

@Component({
    selector: 'app-investment',
    templateUrl: './investment.component.html',
    styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {

    private stockType: string = 'LOKATA';
    private stockDynamicType: string = 'LOKATA DYNAMICZNA';
    private investmentType: string = 'INWESTYCJA';

    @Input()
    public investment: Investment;

    @Input()
    public className: string = 'alert-primary';

    @Input()
    public editable: boolean;

    @Output()
    public edit: EventEmitter<Investment>;

    constructor() {
        this.edit = new EventEmitter<Investment>();
    }

    ngOnInit(): void {
    }

    public editAction(): void {
        this.edit.emit(this.investment);
    }

    public translateCategory(type: InvestmentCategory): string {
        if (type == 'STOCK') {
            return this.stockType;
        } else if (type == 'STOCK_DYNAMIC') {
            return this.stockDynamicType;
        } else {
            return this.investmentType;
        }
    }

}
