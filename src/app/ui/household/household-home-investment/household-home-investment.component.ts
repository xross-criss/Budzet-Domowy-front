import {Component, Input, OnInit} from '@angular/core';
import {Investment} from '../../../model/Investment';

@Component({
    selector: 'app-household-home-investment',
    templateUrl: './household-home-investment.component.html',
    styleUrls: ['./household-home-investment.component.scss']
})
export class HouseholdHomeInvestmentComponent implements OnInit {

    @Input()
    public investment: Investment;

    constructor() {
    }

    ngOnInit(): void {
    }

}
