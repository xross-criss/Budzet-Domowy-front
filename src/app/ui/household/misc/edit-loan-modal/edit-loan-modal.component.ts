import {Component, Injector, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Loan} from '../../../../model/Loan';
import {CacheService} from '../../../../services/cache.service';

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
            bankName: new FormControl(this.loan.bankName),
            annualLoanPercentage: new FormControl(this.loan.annualLoanPercentage),
            startDate: new FormControl(this.loan.startDate),
            endDate: new FormControl(this.loan.endDate),
            amount: new FormControl(this.loan.amount),
            installmentAmount: new FormControl(this.loan.installmentAmount),
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public close(): void {
        this.loan.bankName = this.dataForm.get('bankName').value;
        this.loan.annualLoanPercentage = this.dataForm.get('annualLoanPercentage').value;
        this.loan.startDate = this.dataForm.get('startDate').value;
        this.loan.endDate = this.dataForm.get('endDate').value;
        this.loan.amount = this.dataForm.get('amount').value;
        this.loan.installmentAmount = this.dataForm.get('installmentAmount').value;

        this.activeModal.close(this.loan);
    }

}
