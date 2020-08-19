import {Component, OnInit} from '@angular/core';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Goals} from '../../../model/Goals';
import {GoalsController} from '../../../controllers/goals.controller';
import {GoalCategory} from '../../../model/dictionary/GoalCategory';

@Component({
    selector: 'app-household-home-goals',
    templateUrl: './household-home-goals.component.html',
    styleUrls: ['./household-home-goals.component.scss']
})
export class HouseholdHomeGoalsComponent extends HouseholdLoadableComponent implements OnInit {

    public goalsList: Goals[];
    public savingsList: Goals[];
    public shoppingList: Goals[];

    constructor(
        public goalsController: GoalsController,
    ) {
        super();
    }

    ngOnInit(): void {
    }

    public loadPage(): Observable<any> {
        return this.goalsController.getGoals().pipe(tap(goalsList => {
            this.goalsList = goalsList;

            this.goalsList.forEach(goal => {
                if (goal.category == GoalCategory.SAVINGS) {
                    this.savingsList.push(goal);
                } else {
                    this.shoppingList.push(goal);
                }
            });
        }));
    }

}
