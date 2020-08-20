import {Component, Injector, OnInit} from '@angular/core';
import {Cashflow} from '../../../model/Cashflow';
import {CashflowService} from '../../../services/cashflow.service';
import {CashflowCategory} from '../../../model/dictionary/CashflowCategory';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {EditCashflowModalComponent} from '../misc/edit-cashflow-modal/edit-cashflow-modal.component';

@Component({
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

    public expenseList: Cashflow[];
    public expenseCashflowList: Cashflow[];

    constructor(
        public cashflowService: CashflowService,
        private modalService: NgbModal,
        private injector: Injector,
    ) {
        this.expenseCashflowList = [];
    }

    public ngOnInit(): void {
        this.cashflowService.getCashflowList().subscribe(expenseList => {
            this.expenseList = expenseList;
            this.expenseList.forEach(income => {
                if (income.category == CashflowCategory[CashflowCategory.EXPENSE]) {
                    this.expenseCashflowList.push(income);
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
