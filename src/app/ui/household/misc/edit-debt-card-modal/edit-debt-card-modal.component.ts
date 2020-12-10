import {Component, Injector, OnInit} from '@angular/core';
import {DebtCard} from '../../../../model/DebtCard';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-debt-card-modal',
    templateUrl: './edit-debt-card-modal.component.html',
    styleUrls: ['./edit-debt-card-modal.component.scss']
})
export class EditDebtCardModalComponent implements OnInit {

    public debtCard: DebtCard;
    public dataForm: FormGroup;

    constructor(
        private injector: Injector,
        private activeModal: NgbActiveModal,
    ) {
    }

    public ngOnInit(): void {
        this.debtCard = this.injector.get(DebtCard) || DebtCard.fromObject({});
        this.dataForm = new FormGroup({
            name: new FormControl(this.debtCard.name, [Validators.required]),
            bank: new FormControl(this.debtCard.bank, [Validators.required]),
            balance: new FormControl(this.debtCard.balance, [Validators.required, Validators.pattern(/^\d+(,\d+)?$/)]),
            limit: new FormControl(this.debtCard.limit, [Validators.required, Validators.pattern(/^\d+(,\d+)?$/)]),
            renewalPercentage: new FormControl(this.debtCard.renewalPercentage, [Validators.required, Validators.pattern(/^\d+(,\d+)?$/)]),
            annualPercentage: new FormControl(this.debtCard.annualPercentage, [Validators.required, Validators.pattern(/^\d+(,\d+)?$/)]),
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public isEditAction(): string {
        if (this.debtCard.limit === null || this.debtCard.limit === undefined) {
            return 'Dodaj';
        } else {
            return 'Edytuj';
        }
    }

    public close(): void {
        if (this.dataForm.invalid) {
            return;
        }
        const obj: DebtCard = this.dataForm.getRawValue();
        obj.id = this.debtCard.id;
        this.debtCard = DebtCard.fromObject(obj);
        this.activeModal.close(this.debtCard);
    }

}
