import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cashflow} from '../../../model/Cashflow';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

    @Input()
    public cashflow: Cashflow;

    @Input()
    public className: string = 'alert-primary';

    @Input()
    public editable: boolean;

    @Output()
    public edit: EventEmitter<Cashflow>;

    constructor() {
        this.edit = new EventEmitter<Cashflow>();
    }

    ngOnInit(): void {
    }

    public editAction(): void {
        this.edit.emit(this.cashflow);
    }

}
