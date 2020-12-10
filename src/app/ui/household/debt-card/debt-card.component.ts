import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DebtCard} from '../../../model/DebtCard';

@Component({
    selector: 'app-debt-card',
    templateUrl: './debt-card.component.html',
    styleUrls: ['./debt-card.component.scss']
})
export class DebtCardComponent implements OnInit {

    @Input()
    public debtCard: DebtCard;

    @Input()
    public className: string = 'alert-primary';

    @Input()
    public editable: boolean;

    @Output()
    public edit: EventEmitter<DebtCard>;

    constructor() {
        this.edit = new EventEmitter<DebtCard>();
    }

    ngOnInit(): void {
    }

    public editAction(): void {
        this.edit.emit(this.debtCard);
    }

}
