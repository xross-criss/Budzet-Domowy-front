import {Component, Injector, OnInit} from '@angular/core';
import {Loan} from '../../../model/Loan';
import {LoanService} from '../../../services/loan.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {CacheService} from '../../../services/cache.service';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {EditLoanModalComponent} from '../misc/edit-loan-modal/edit-loan-modal.component';

@Component({
    selector: 'app-loans',
    templateUrl: './loans.component.html',
    styleUrls: ['./loans.component.scss']
})
export class LoansComponent extends HouseholdLoadableComponent implements OnInit {

    public loansList: Loan[];

    constructor(
        public loanService: LoanService,
        private modalService: NgbModal,
        private injector: Injector,
        private cacheService: CacheService,
    ) {
        super();
        this.loansList = [];
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.loanService.getLoans().pipe(tap((loansList: Loan[]) => this.loansList = loansList));
    }

    public edit(flow: Loan): void {
        this.modalService.open(EditLoanModalComponent, {
            injector: Injector.create({
                providers: [{
                    provide: Loan,
                    useValue: flow
                }],
                parent: this.injector
            })
        }).result.then((result: Loan) => {
            result.household = this.cacheService.get('household');

            this.loanService.updateLoan(result).subscribe(() => this.ngOnInit());
        }, () => {
        });
    }

}
