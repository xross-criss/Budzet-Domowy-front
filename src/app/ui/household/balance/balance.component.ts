import {Component, Input, OnInit} from '@angular/core';
import {Balance} from '../../../model/Balance';

@Component({
    selector: 'app-balance',
    templateUrl: './balance.component.html',
    styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

    @Input()
    public balance: Balance;

    @Input()
    public className: string = 'alert-primary';

    constructor() {
    }

    public ngOnInit(): void {
    }

}
