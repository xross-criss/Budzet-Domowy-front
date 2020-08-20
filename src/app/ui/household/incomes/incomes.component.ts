import {Component, Injector, OnInit} from '@angular/core';
import {Cashflow} from '../../../model/Cashflow';
import {CashflowService} from '../../../services/cashflow.service';
import {CashflowCategory} from '../../../model/dictionary/CashflowCategory';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditCashflowModalComponent} from '../misc/edit-cashflow-modal/edit-cashflow-modal.component';

@Component({
    selector: 'app-incomes',
    templateUrl: './incomes.component.html',
    styleUrls: ['./incomes.component.scss']
})
export class IncomesComponent implements OnInit {

    public incomeList: Cashflow[];
    public incomeCashflowList: Cashflow[];

    constructor(
        public cashflowService: CashflowService,
        private modalService: NgbModal,
        private injector: Injector,
    ) {
        this.incomeCashflowList = [];
    }

    public ngOnInit(): void {
        this.cashflowService.getCashflowList().subscribe(incomeList => {
            this.incomeList = incomeList;
            this.incomeList.forEach(income => {
                if (income.category == CashflowCategory[CashflowCategory.INCOME]) {
                    this.incomeCashflowList.push(income);
                }
            });
        });
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
            console.log(result);
            this.ngOnInit();
        }, () => {
        });
    }

}
