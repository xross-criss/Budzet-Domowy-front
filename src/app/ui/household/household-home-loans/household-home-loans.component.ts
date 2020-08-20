import {Component, OnInit} from '@angular/core';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {Loan} from '../../../model/Loan';
import {LoanService} from '../../../services/loan.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-household-home-loans',
    templateUrl: './household-home-loans.component.html',
    styleUrls: ['./household-home-loans.component.scss']
})
export class HouseholdHomeLoansComponent extends HouseholdLoadableComponent implements OnInit {

    public loansList: Loan[];

    constructor(
        public loanService: LoanService,
    ) {
        super();
    }

    ngOnInit(): void {
    }

    public loadPage(): Observable<any> {
        return this.loanService.getLoans().pipe(tap(loansList => this.loansList = loansList));
    }

}
