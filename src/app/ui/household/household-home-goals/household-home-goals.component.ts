import {Component, OnInit} from '@angular/core';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Goals} from '../../../model/Goals';
import {GoalsService} from '../../../services/goals.service';
import {GoalCategory} from '../../../model/dictionary/GoalCategory';

@Component({
    selector: 'app-household-home-goals',
    templateUrl: './household-home-goals.component.html',
    styleUrls: ['./household-home-goals.component.scss']
})
export class HouseholdHomeGoalsComponent extends HouseholdLoadableComponent implements OnInit {

    public savingsList: Goals[];
    public shoppingList: Goals[];

    constructor(
        public goalsService: GoalsService,
    ) {
        super();
        this.savingsList = [];
        this.shoppingList = [];
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.goalsService.getGoals().pipe(tap(goalsList => {
            goalsList.forEach(goal => {
                if (goal.category == GoalCategory[GoalCategory.SAVINGS]) {
                    this.savingsList.push(goal);
                } else {
                    this.shoppingList.push(goal);
                }
            });
            console.log(this.savingsList, this.shoppingList);
        }));
    }

}
