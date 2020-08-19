import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {DebtCard} from '../../../model/DebtCard';
import {DebtCardsController} from '../../../controllers/debt-cards.controller';

@Component({
    selector: 'app-household-home-debt-cards',
    templateUrl: './household-home-debt-cards.component.html',
    styleUrls: ['./household-home-debt-cards.component.scss']
})
export class HouseholdHomeDebtCardsComponent extends HouseholdLoadableComponent implements OnInit {

    public debtCardsList: DebtCard[];

    constructor(
        public debtCardsController: DebtCardsController,
    ) {
        super();
    }

    ngOnInit(): void {
    }

    public loadPage(): Observable<any> {
        return this.debtCardsController.getDebtsCards().pipe(tap(debtCardsList => this.debtCardsList = debtCardsList));
    }

}
