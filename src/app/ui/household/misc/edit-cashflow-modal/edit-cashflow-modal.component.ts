import {Component, Inject, Injector, OnInit} from '@angular/core';
import {Cashflow} from '../../../../model/Cashflow';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-cashflow-modal',
    templateUrl: './edit-cashflow-modal.component.html',
    styleUrls: ['./edit-cashflow-modal.component.scss']
})
export class EditCashflowModalComponent implements OnInit {

    public cashFlow: Cashflow;
    public dataForm: FormGroup;
    public isEdit: boolean;

    constructor(
        private injector: Injector,
        private activeModal: NgbActiveModal,
    ) {
    }

    public ngOnInit(): void {
        this.isEdit = false;
        this.cashFlow = this.injector.get(Cashflow) || Cashflow.fromObject({});
        this.dataForm = new FormGroup({
            startDate: new FormControl(this.cashFlow.startDate),
            endDate: new FormControl(this.cashFlow.endDate),
            amount: new FormControl(this.cashFlow.amount),
            period: new FormControl(this.cashFlow.period),
            description: new FormControl(this.cashFlow.description)
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public close(): void {
        this.cashFlow.startDate = this.dataForm.get('startDate').value;
        this.cashFlow.endDate = this.dataForm.get('endDate').value;
        this.cashFlow.amount = this.dataForm.get('amount').value;
        this.cashFlow.period = this.dataForm.get('period').value;
        this.cashFlow.description = this.dataForm.get('description').value;

        this.activeModal.close(this.cashFlow);
    }

    public isEditAction(): string {
        if (this.cashFlow.category === null || this.cashFlow.category === undefined) {
            return 'Dodaj';
        } else {
            this.isEdit = true;
            return 'Edytuj';
        }
    }

    public isIncomeAction(): string {
        if (this.isEdit === true) {
            if (this.cashFlow.category === 'INCOME') {
                return 'przychód';
            } else {
                return 'wydatek';
            }
        }
        else {
            return 'nowy';
        }
    }

}
