import {Component, Injector, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Insurance} from '../../../../model/Insurance';
import {DateUtil} from '../../../../commons/utils/date-util';

@Component({
    selector: 'app-edit-insurance-modal',
    templateUrl: './edit-insurance-modal.component.html',
    styleUrls: ['./edit-insurance-modal.component.scss']
})
export class EditInsuranceModalComponent implements OnInit {

    public insurance: Insurance;
    public dataForm: FormGroup;

    constructor(
        private injector: Injector,
        private activeModal: NgbActiveModal,
    ) {
    }

    public ngOnInit(): void {
        this.insurance = this.injector.get(Insurance) || Insurance.fromObject({});
        this.dataForm = new FormGroup({
            type: new FormControl(this.insurance.type, [Validators.required]),
            name: new FormControl(this.insurance.name, [Validators.required]),
            description: new FormControl(this.insurance.description, [Validators.required]),
            cost: new FormControl(this.insurance.cost, [Validators.required, Validators.pattern(/^\d+(,\d+)?$/)]),
            period: new FormControl(this.insurance.period, [Validators.required]),
            endDate: new FormControl(DateUtil.ngbDateFromString(this.insurance.endDate), [Validators.required]),
            vehicleTID: new FormControl(this.insurance.vehicleTID),
            vehicleLP: new FormControl(DateUtil.ngbDateFromString(this.insurance.vehicleLP)),
        });
    }

    public isEditAction(): string {
        if (this.insurance.type === null || this.insurance.type === undefined) {
            return 'Dodaj nowe';
        } else {
            return 'Edytuj';
        }
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public close(): void {
        if (this.dataForm.invalid) {
            return;
        }
        const obj: Insurance = this.dataForm.getRawValue();
        obj.id = this.insurance.id;
        obj.endDate = DateUtil.ngbDateToString(obj.endDate as any);
        obj.vehicleLP = DateUtil.ngbDateToString(obj.vehicleLP as any);
        this.insurance = Insurance.fromObject(obj);
        this.activeModal.close(this.insurance);
    }

}
