import {Component, OnInit} from '@angular/core';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Cashflow} from '../../../model/Cashflow';
import {CashflowService} from '../../../services/cashflow.service';
import {CashflowCategory} from '../../../model/dictionary/CashflowCategory';

@Component({
    selector: 'app-household-home-cashflow',
    templateUrl: './household-home-cashflow.component.html',
    styleUrls: ['./household-home-cashflow.component.scss']
})
export class HouseholdHomeCashflowComponent extends HouseholdLoadableComponent implements OnInit {

    public cashflowList: Cashflow[];
    public incomeCashflowList: Cashflow[];
    public expenseCashflowList: Cashflow[];

    constructor(
        public cashflowService: CashflowService,
    ) {
        super();
    }

    ngOnInit(): void {
    }

    public loadPage(): Observable<any> {
        return this.cashflowService.getCashflowForCurrentMonth().pipe(tap(cashflowList => {
            this.cashflowList = cashflowList;

            this.cashflowList.forEach(cashflow => {
                if (cashflow.category === CashflowCategory[CashflowCategory.INCOME]) {
                    this.incomeCashflowList.push(cashflow);
                } else {
                    this.expenseCashflowList.push(cashflow);
                }
            });
        }));
    }

}
