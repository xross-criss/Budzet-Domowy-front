import {Component, Injector, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Investment} from '../../../../model/Investment';
import {DateUtil} from '../../../../commons/utils/date-util';

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
            type: new FormControl(this.investment.type, [Validators.required]),
            amount: new FormControl(this.investment.amount, [Validators.required]),
            name: new FormControl(this.investment.name, [Validators.required, Validators.min(2)]),
            period: new FormControl(this.investment.period, [Validators.required]),
            investmentPercentage: new FormControl(this.investment.investmentPercentage, [Validators.required, Validators.pattern(/^\d+(,\d+)?$/)]),
            startDate: new FormControl(DateUtil.ngbDateFromString(this.investment.startDate), [Validators.required]),
            endDate: new FormControl(DateUtil.ngbDateFromString(this.investment.endDate), [Validators.required]),
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
        if (this.dataForm.invalid) {
            return;
        }
        const obj: Investment = this.dataForm.getRawValue();
        obj.id = this.investment.id;
        obj.startDate = DateUtil.ngbDateToString(obj.startDate as any);
        obj.endDate = DateUtil.ngbDateToString(obj.endDate as any);
        this.investment = Investment.fromObject(obj);
        this.activeModal.close(this.investment);
    }

}
