import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Loan} from '../../../model/Loan';

@Component({
    selector: 'app-loan',
    templateUrl: './loan.component.html',
    styleUrls: ['./loan.component.scss']
})
export class LoanComponent implements OnInit {

    @Input()
    public loan: Loan;

    @Input()
    public className: string = 'alert-primary';

    @Input()
    public editable: boolean;

    @Output()
    public edit: EventEmitter<Loan>;

    constructor() {
        this.edit = new EventEmitter<Loan>();
    }

    ngOnInit(): void {
    }

    public editAction(): void {
        this.edit.emit(this.loan);
    }

}
