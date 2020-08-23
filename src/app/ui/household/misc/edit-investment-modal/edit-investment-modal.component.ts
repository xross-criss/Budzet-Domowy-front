import {Component, Injector, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Investment} from '../../../../model/Investment';

@Component({
    selector: 'app-edit-investment-modal',
    templateUrl: './edit-investment-modal.component.html',
    styleUrls: ['./edit-investment-modal.component.scss']
})
export class EditInvestmentModalComponent implements OnInit {

    public investment: Investment;
    public dataForm: FormGroup;

    constructor(
        private injector: Injector,
        private activeModal: NgbActiveModal,
    ) {
    }

    public ngOnInit(): void {
        this.investment = this.injector.get(Investment) || Investment.fromObject({});
        this.dataForm = new FormGroup({
            type: new FormControl(this.investment.type),
            amount: new FormControl(this.investment.amount),
            name: new FormControl(this.investment.name),
            period: new FormControl(this.investment.period),
            investmentPercentage: new FormControl(this.investment.investmentPercentage),
            startDate: new FormControl(this.investment.startDate),
            endDate: new FormControl(this.investment.endDate),
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public isEditAction(): string {
        if (this.investment.type === null || this.investment.type === undefined) {
            return 'Dodaj nową';
        } else {
            return 'Edytuj';
        }
    }

    public close(): void {

        this.investment.type = this.dataForm.get('type').value;
        this.investment.amount = this.dataForm.get('amount').value;
        this.investment.name = this.dataForm.get('name').value;
        this.investment.period = this.dataForm.get('period').value;
        this.investment.investmentPercentage = this.dataForm.get('investmentPercentage').value;
        this.investment.startDate = this.dataForm.get('startDate').value;
        this.investment.endDate = this.dataForm.get('endDate').value;

        this.activeModal.close(this.investment);
    }

}
