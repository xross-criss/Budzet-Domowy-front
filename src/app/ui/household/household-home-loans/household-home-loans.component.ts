import {Component, Input, OnInit} from '@angular/core';
import {Loan} from '../../../model/Loan';

@Component({
    selector: 'app-household-home-loans',
    templateUrl: './household-home-loans.component.html',
    styleUrls: ['./household-home-loans.component.scss']
})
export class HouseholdHomeLoansComponent implements OnInit {

    @Input()
    public loansList: Loan[];

    @Input()
    public name: string;

    constructor() {
    }

    public ngOnInit(): void {

    }

}
