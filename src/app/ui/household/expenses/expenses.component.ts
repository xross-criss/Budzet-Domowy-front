import {Component, Injector, OnInit} from '@angular/core';
import {Cashflow} from '../../../model/Cashflow';
import {CashflowService} from '../../../services/cashflow.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditCashflowModalComponent} from '../misc/edit-cashflow-modal/edit-cashflow-modal.component';
import {CacheService} from '../../../services/cache.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HouseholdLoadableComponent} from '../household-loadable-component';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent extends HouseholdLoadableComponent implements OnInit {

    public expensesCashflowList: Cashflow[];

    constructor(
        public cashflowService: CashflowService,
        private modalService: NgbModal,
        private injector: Injector,
        private cacheService: CacheService,
    ) {
        super();
        this.expensesCashflowList = [];
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.cashflowService.getCashflowList().pipe(tap((expensesList: Cashflow[]) => {
            this.expensesCashflowList = [];
            for (let cashflow of expensesList) {
                if (cashflow.category == 'EXPENSE') {
                    this.expensesCashflowList.push(cashflow);
                }
            }
        }));
    }

    public edit(flow: Cashflow): void {
        this.modalService.open(EditCashflowModalComponent, {
            injector: Injector.create({
                providers: [{
                    provide: Cashflow,
                    useValue: flow
                }],
                parent: this.injector
            })
        }).result.then((result: Cashflow) => {
            result.household = this.cacheService.get('household');

            result.category = 'EXPENSE';
            this.cashflowService.updateCashflow(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

}
