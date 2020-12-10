import {Component, Injector, Input} from '@angular/core';
import {Goal} from '../../../model/Goal';
import {GoalsService} from '../../../services/goals.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CacheService} from '../../../services/cache.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {EditGoalsModalComponent} from '../misc/edit-goals-modal/edit-goals-modal.component';
import {HouseholdLoadableComponent} from '../household-loadable-component';

@Component({
    selector: 'app-goals',
    templateUrl: './goals.component.html',
    styleUrls: ['./goals.component.scss']
})
export class GoalsComponent extends HouseholdLoadableComponent{

    @Input()
    public addable: boolean = true;

    @Input()
    public editable: boolean = true;

    public savingsList: Goal[];
    public shoppingList: Goal[];

    constructor(
        public goalsService: GoalsService,
        private modalService: NgbModal,
        private injector: Injector,
        private cacheService: CacheService,
    ) {
        super();
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.goalsService.getGoals().pipe(tap((goalsList: Goal[]) => {
            this.savingsList = [];
            this.shoppingList = [];
            for (let goal of goalsList) {
                if (goal.category === 'SAVINGS') {
                    this.savingsList.push(goal);
                } else {
                    this.shoppingList.push(goal);
                }
            }
        }));
    }

    public edit(flow: Goal): void {
        this.modalService.open(EditGoalsModalComponent, {
            injector: Injector.create({
                providers: [{
                    provide: Goal,
                    useValue: flow
                }],
                parent: this.injector
            })
        }).result.then((result: Goal) => {
            result.household = this.cacheService.get('household');
            this.goalsService.updateGoal(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

}

