import {Component, Injector, OnInit} from '@angular/core';
import {Goal} from '../../../../model/Goal';
import {FormControl, FormGroup} from '@angular/forms';
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
            id: new FormControl(this.goal.id),
            category: new FormControl(this.goal.category),
            amount: new FormControl(this.goal.amount),
            name: new FormControl(this.goal.name),
            description: new FormControl(this.goal.description),
            priority: new FormControl(this.goal.priority)
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
        this.goal.category = this.dataForm.get('category').value;
        this.goal.amount = this.dataForm.get('amount').value;
        this.goal.name = this.dataForm.get('name').value;
        this.goal.description = this.dataForm.get('description').value;
        this.goal.priority = this.dataForm.get('priority').value;

        this.activeModal.close(this.goal);
    }

}
