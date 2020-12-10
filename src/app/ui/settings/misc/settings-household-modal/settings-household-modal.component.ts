import {Component, Injector, OnInit} from '@angular/core';
import {Household} from '../../../../model/Household';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings-household-modal',
  templateUrl: './settings-household-modal.component.html',
  styleUrls: ['./settings-household-modal.component.scss']
})
export class SettingsHouseholdModalComponent implements OnInit {

    public household: Household;
    public dataForm: FormGroup;

    constructor(
        private injector: Injector,
        private activeModal: NgbActiveModal,
    ) {
    }

    public ngOnInit(): void {
        this.household = this.injector.get(Household) || Household.fromObject({});
        this.dataForm = new FormGroup({
            cost: new FormControl(this.household.cost, [Validators.required]),
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public close(): void {
        if (this.dataForm.invalid) {
            return;
        }
        const obj: Household = this.dataForm.getRawValue();
        obj.id = this.household.id;
        this.household = Household.fromObject(obj);
        this.activeModal.close(this.household);
    }

}
