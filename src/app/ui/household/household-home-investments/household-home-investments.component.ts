import {Component, OnInit} from '@angular/core';
import {Investment} from '../../../model/Investment';
import {InvestmentController} from '../../../controllers/investment.controller';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
    selector: 'app-household-home-investments',
    templateUrl: './household-home-investments.component.html',
    styleUrls: ['./household-home-investments.component.scss']
})
export class HouseholdHomeInvestmentsComponent extends HouseholdLoadableComponent implements OnInit {

    public investmentsList: Investment[];

    constructor(
        public investmentController: InvestmentController,
    ) {
        super();
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.investmentController.getInvestmentForCurrentMonth().pipe(tap(investmentsList => this.investmentsList = investmentsList));
    }

}
