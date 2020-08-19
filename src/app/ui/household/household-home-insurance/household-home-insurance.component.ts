import {Component, OnInit} from '@angular/core';
import {InsuranceController} from '../../../controllers/insurance.controller';
import {HouseholdLoadableComponent} from '../household-loadable-component';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Insurance} from '../../../model/Insurance';

@Component({
    selector: 'app-household-home-insurance',
    templateUrl: './household-home-insurance.component.html',
    styleUrls: ['./household-home-insurance.component.scss']
})
export class HouseholdHomeInsuranceComponent extends HouseholdLoadableComponent implements OnInit {

    public insuranceList: Insurance[];

    constructor(
        public insuranceController: InsuranceController,
    ) {
        super();
    }

    public ngOnInit(): void {
        super.ngOnInit();
    }

    public loadPage(): Observable<any> {
        return this.insuranceController.getInsuranceForCurrentMonth().pipe(tap(insuranceList => this.insuranceList = insuranceList));
    }

}
