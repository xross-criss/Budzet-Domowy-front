import {Component, Input, OnInit} from '@angular/core';
import {Goal} from '../../../model/Goal';
import {GoalCategory} from '../../../model/dictionary/GoalCategory';

@Component({
    selector: 'app-household-home-goals',
    templateUrl: './household-home-goals.component.html',
    styleUrls: ['./household-home-goals.component.scss']
})
export class HouseholdHomeGoalsComponent implements OnInit {

    @Input()
    public goalsList: Goal[];

    @Input()
    public name: string;

    public goalsCategory: GoalCategory;
    public isEmpty: boolean;

    constructor() {
    }

    public ngOnInit(): void {
        if (!this.goalsList || this.goalsList.length === 0) {
            this.isEmpty = true;
        } else {
            this.goalsCategory = this.goalsList[0].category;
        }
    }

}
