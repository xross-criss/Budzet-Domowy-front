import {Component, Injector, OnInit} from '@angular/core';
import {Cashflow} from '../../../../model/Cashflow';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {DateUtil} from '../../../../commons/utils/date-util';

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
            startDate: new FormControl(DateUtil.ngbDateFromString(this.cashFlow.startDate), [Validators.required]),
            endDate: new FormControl(DateUtil.ngbDateFromString(this.cashFlow.endDate), [Validators.required]),
            amount: new FormControl(this.cashFlow.amount, [Validators.required, Validators.pattern(/^\d+(,\d+)?$/)]),
            period: new FormControl(this.cashFlow.period, [Validators.required]),
            description: new FormControl(this.cashFlow.description)
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public close(): void {
        if (this.dataForm.invalid) {
            return;
        }
        const obj: Cashflow = this.dataForm.getRawValue();
        obj.id = this.cashFlow.id;
        obj.startDate = DateUtil.ngbDateToString(obj.startDate as any);
        obj.endDate = DateUtil.ngbDateToString(obj.endDate as any);
        this.cashFlow = Cashflow.fromObject(obj);

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
        } else {
            return 'nowy';
        }
    }

}
