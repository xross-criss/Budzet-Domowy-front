import {Component, Input, OnInit} from '@angular/core';
import {Loan} from '../../../model/Loan';

@Component({
    selector: 'app-household-home-loan',
    templateUrl: './household-home-loan.component.html',
    styleUrls: ['./household-home-loan.component.scss']
})
export class HouseholdHomeLoanComponent implements OnInit {

    @Input()
    public loan: Loan;

    @Input()
    public className: string = 'alert-primary';

    constructor() {
    }

    ngOnInit(): void {
    }

}
