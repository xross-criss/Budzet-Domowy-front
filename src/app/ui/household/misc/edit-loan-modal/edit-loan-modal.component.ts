import {Component, Injector, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Loan} from '../../../../model/Loan';
import {DateUtil} from '../../../../commons/utils/date-util';

@Component({
    selector: 'app-edit-loan-modal',
    templateUrl: './edit-loan-modal.component.html',
    styleUrls: ['./edit-loan-modal.component.scss']
})
export class EditLoanModalComponent implements OnInit {

    public loan: Loan;
    public dataForm: FormGroup;

    constructor(
        private injector: Injector,
        private activeModal: NgbActiveModal,
    ) {
    }

    public ngOnInit(): void {
        this.loan = this.injector.get(Loan) || Loan.fromObject({});
        this.dataForm = new FormGroup({
            bankName: new FormControl(this.loan.bankName, [Validators.required, Validators.min(2)]),
            annualLoanPercentage: new FormControl(this.loan.annualLoanPercentage, [Validators.required]),
            startDate: new FormControl(DateUtil.ngbDateFromString(this.loan.startDate), [Validators.required]),
            endDate: new FormControl(DateUtil.ngbDateFromString(this.loan.endDate), [Validators.required]),
            amount: new FormControl(this.loan.amount, [Validators.required, Validators.pattern(/^\d+(,\d+)?$/)]),
            installmentAmount: new FormControl(this.loan.installmentAmount, [Validators.required]),
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public isEditAction(): string {
        if (this.loan.bankName === null || this.loan.bankName === undefined) {
            return 'Dodaj nową';
        } else {
            return 'Edytuj';
        }
    }

    public close(): void {
        if (this.dataForm.invalid) {
            return;
        }

        const obj: Loan = this.dataForm.getRawValue();
        obj.id = this.loan.id;
        this.loan.startDate = DateUtil.ngbDateToString(obj.startDate as any);
        this.loan.endDate = DateUtil.ngbDateToString(obj.endDate as any);
        this.loan = Loan.fromObject(obj);

        this.activeModal.close(this.loan);
    }

}
