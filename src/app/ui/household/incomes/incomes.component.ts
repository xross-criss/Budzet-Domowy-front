import {Component, Injector, OnInit} from '@angular/core';
import {Cashflow} from '../../../model/Cashflow';
import {CashflowService} from '../../../services/cashflow.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditCashflowModalComponent} from '../misc/edit-cashflow-modal/edit-cashflow-modal.component';
import {CacheService} from '../../../services/cache.service';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-incomes',
    templateUrl: './incomes.component.html',
    styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent extends HouseholdLoadableComponent implements OnInit {

    public incomeCashflowList: Cashflow[];

    constructor(
        public cashflowService: CashflowService,
        private modalService: NgbModal,
        private injector: Injector,
        private cacheService: CacheService,
    ) {
        super();
        this.incomeCashflowList = [];
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.cashflowService.getCashflowList().pipe(tap((incomeList: Cashflow[]) => {
            this.incomeCashflowList = [];
            for (let cashflow of incomeList) {
                if (cashflow.category == 'INCOME') {
                    this.incomeCashflowList.push(cashflow);
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

            result.category = 'INCOME';
            this.cashflowService.updateCashflow(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

}
