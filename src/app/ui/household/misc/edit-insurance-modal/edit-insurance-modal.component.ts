import {Component, Injector, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Insurance} from '../../../../model/Insurance';

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
            type: new FormControl(this.insurance.type),
            name: new FormControl(this.insurance.name),
            description: new FormControl(this.insurance.description),
            cost: new FormControl(this.insurance.cost),
            period: new FormControl(this.insurance.period),
            endDate: new FormControl(this.insurance.endDate),
            vehicleTID: new FormControl(this.insurance.vehicleTID),
            vehicleLP: new FormControl(this.insurance.vehicleLP),
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
        this.activeModal.close(this.insurance);
    }

}
