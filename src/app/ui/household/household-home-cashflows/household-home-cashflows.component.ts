import {Component, Input, OnInit} from '@angular/core';
import {Cashflow} from '../../../model/Cashflow';
import {CashflowCategory} from '../../../model/dictionary/CashflowCategory';

@Component({
    selector: 'app-household-home-cashflows',
    templateUrl: './household-home-cashflows.component.html',
    styleUrls: ['./household-home-cashflows.component.scss']
})
export class HouseholdHomeCashflowsComponent implements OnInit {

    @Input()
    public cashflowList: Cashflow[];

    @Input()
    public name: string;

    public cashflowCategory: CashflowCategory;
    public isEmpty: boolean;

    constructor() {
        this.isEmpty = false;
    }

    public ngOnInit(): void {
        if (!this.cashflowList || this.cashflowList.length === 0) {
            this.isEmpty = true;
        } else {
            this.cashflowCategory = this.cashflowList[0].category;
        }
    }

}
