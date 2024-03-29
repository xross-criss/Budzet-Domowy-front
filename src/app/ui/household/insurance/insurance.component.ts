import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Insurance} from '../../../model/Insurance';

@Component({
    selector: 'app-insurance',
    templateUrl: './insurance.component.html',
    styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

    @Input()
    public insurance: Insurance;

    @Input()
    public className: string = 'alert-primary';

    @Input()
    public editable: boolean;

    @Output()
    public edit: EventEmitter<Insurance>;

    public isCarInsurance: boolean = false;

    constructor() {
        this.edit = new EventEmitter<Insurance>();
    }

    ngOnInit(): void {
        if (this.insurance.type === 'CAR') {
            this.isCarInsurance = true;
        }
    }

    public editAction(): void {
        this.edit.emit(this.insurance);
    }

}
