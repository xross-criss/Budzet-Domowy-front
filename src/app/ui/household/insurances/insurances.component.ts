import {Component, OnInit} from '@angular/core';
import {Insurance} from '../../../model/Insurance';
import {InsuranceService} from '../../../services/insurance.service';

@Component({
    selector: 'app-insurances',
    templateUrl: './insurances.component.html',
    styleUrls: ['./insurances.component.scss']
})
export class InsurancesComponent implements OnInit {

    public insuranceList: Insurance[];

    constructor(public insuranceService: InsuranceService) {
    }

    ngOnInit(): void {
        this.insuranceService.getInsurances().subscribe(insurances => this.insuranceList = insurances);
    }

}
