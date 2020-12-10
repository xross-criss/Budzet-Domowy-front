import {Component, Input, OnInit} from '@angular/core';
import {Insurance} from '../../../model/Insurance';
import {InsuranceType} from '../../../model/dictionary/InsuranceType';

@Component({
    selector: 'app-household-home-insurances',
    templateUrl: './household-home-insurances.component.html',
    styleUrls: ['./household-home-insurances.component.scss']
})
export class HouseholdHomeInsurancesComponent implements OnInit {

    @Input()
    public insurancesList: Insurance[];

    @Input()
    public name: string;

    constructor() {
    }

    public ngOnInit(): void {
    }

}
