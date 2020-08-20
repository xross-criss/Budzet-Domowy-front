import {Component, OnInit} from '@angular/core';
import {Loan} from '../../../model/Loan';
import {LoanService} from '../../../services/loan.service';

@Component({
    selector: 'app-loans',
    templateUrl: './loans.component.html',
    styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

    public loansList: Loan[];

    constructor(public loanService: LoanService) {
    }

    ngOnInit(): void {
        this.loanService.getLoans().subscribe(loansList => this.loansList = loansList);
    }

}
