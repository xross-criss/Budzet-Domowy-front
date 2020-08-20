import {Component, OnInit} from '@angular/core';
import {Investment} from '../../../model/Investment';
import {InvestmentService} from '../../../services/investment.service';

@Component({
    selector: 'app-investments',
    templateUrl: './investments.component.html',
    styleUrls: ['./investments.component.scss']
})
export class InvestmentsComponent implements OnInit {

    public investmentsList: Investment[];

    constructor(
        public investmentService: InvestmentService,
    ) {
    }

    ngOnInit(): void {
        this.investmentService.getInvestments().subscribe(investmentsList => this.investmentsList = investmentsList);
    }

}
