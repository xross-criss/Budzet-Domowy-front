import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DebtCard} from '../../../model/DebtCard';

@Component({
  selector: 'app-household-home-debt-card',
  templateUrl: './household-home-debt-card.component.html',
  styleUrls: ['./household-home-debt-card.component.scss']
})
export class HouseholdHomeDebtCardComponent implements OnInit {

    @Input()
    public debtCard: DebtCard;

    @Input()
    public className: string = 'alert-primary';

    constructor() {
    }

    ngOnInit(): void {
    }

}
