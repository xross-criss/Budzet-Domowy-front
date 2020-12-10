import {Component, Input, OnInit} from '@angular/core';
import {Cashflow} from '../../../model/Cashflow';

@Component({
    selector: 'app-household-home-cashflow',
    templateUrl: './household-home-cashflow.component.html',
    styleUrls: ['./household-home-cashflow.component.scss']
})
export class HouseholdHomeCashflowComponent implements OnInit {

    @Input()
    public cashflow: Cashflow;

    @Input()
    public className: string = 'alert-primary';


    constructor() {
    }

    ngOnInit(): void {
    }

}
