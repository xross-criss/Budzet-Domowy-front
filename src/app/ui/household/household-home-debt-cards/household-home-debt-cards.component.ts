import {Component, Input, OnInit} from '@angular/core';
import {DebtCard} from '../../../model/DebtCard';

@Component({
    selector: 'app-household-home-debt-cards',
    templateUrl: './household-home-debt-cards.component.html',
    styleUrls: ['./household-home-debt-cards.component.scss']
})
export class HouseholdHomeDebtCardsComponent implements OnInit {

    @Input()
    public debtCardsList: DebtCard[];

    @Input()
    public name: string;

    constructor() {
    }

    public ngOnInit(): void {
    }

}
