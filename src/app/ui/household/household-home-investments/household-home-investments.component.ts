import {Component, Input, OnInit} from '@angular/core';
import {Investment} from '../../../model/Investment';
import {InvestmentCategory} from '../../../model/dictionary/InvestmentCategory';

@Component({
    selector: 'app-household-home-investments',
    templateUrl: './household-home-investments.component.html',
    styleUrls: ['./household-home-investments.component.scss']
})
export class HouseholdHomeInvestmentsComponent implements OnInit {

    @Input()
    public investmentList: Investment[];

    @Input()
    public name: string;

    public investmentCategory: InvestmentCategory;
    public isEmpty: boolean;

    constructor() {
        this.isEmpty = false;
    }

    public ngOnInit(): void {
        if (!this.investmentList || this.investmentList.length === 0) {
            this.isEmpty = true;
        } else {
            this.investmentCategory = this.investmentList[0].type;
        }
    }

}
