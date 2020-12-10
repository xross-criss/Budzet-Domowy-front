import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Goal} from '../../../model/Goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

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
