import {Component, Injector, OnInit} from '@angular/core';
import {Goal} from '../../../../model/Goal';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-goals-modal',
    templateUrl: './edit-goals-modal.component.html',
    styleUrls: ['./edit-goals-modal.component.scss']
})
export class EditGoalsModalComponent implements OnInit {

    public goal: Goal;
    public dataForm: FormGroup;

    constructor(
        private injector: Injector,
        private activeModal: NgbActiveModal,
    ) {
    }

    public ngOnInit(): void {
        this.goal = this.injector.get(Goal) || Goal.fromObject({});
        this.dataForm = new FormGroup({
            category: new FormControl(this.goal.category, [Validators.required]),
            amount: new FormControl(this.goal.amount, [Validators.required, Validators.pattern(/^\d+(,\d+)?$/)]),
            name: new FormControl(this.goal.name, [Validators.required]),
            description: new FormControl(this.goal.description, [Validators.required]),
            priority: new FormControl(this.goal.priority, [Validators.required]),
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public isEditAction(): string {
        if (this.goal.category === null || this.goal.category === undefined) {
            return 'Dodaj';
        } else {
            return 'Edytuj';
        }
    }

    public close(): void {
        if (this.dataForm.invalid) {
            return;
        }
        const obj: Goal = this.dataForm.getRawValue();
        obj.id = this.goal.id;
        this.goal = Goal.fromObject(obj);
        this.activeModal.close(this.goal);
    }

}
