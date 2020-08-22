import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Goal} from '../../../model/Goal';

@Component({
    selector: 'app-household-home-goal',
    templateUrl: './household-home-goal.component.html',
    styleUrls: ['./household-home-goal.component.scss']
})
export class HouseholdHomeGoalComponent implements OnInit {

    @Input()
    public goal: Goal;

    @Input()
    public className: string = 'alert-primary';

    @Input()
    public editable: boolean;

    @Output()
    public edit: EventEmitter<Goal>;

    constructor() {
        this.edit = new EventEmitter<Goal>();
    }

    public ngOnInit(): void {
    }

    public editAction(): void {
        this.edit.emit(this.goal);
    }

    public deleteAction() {
        this.edit.emit(this.goal);
    }
}
