import {Component, Inject, Injector, OnInit} from '@angular/core';
import {Cashflow} from '../../../../model/Cashflow';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-edit-cashflow-modal',
    templateUrl: './edit-cashflow-modal.component.html',
    styleUrls: ['./edit-cashflow-modal.component.scss']
})
export class EditCashflowModalComponent implements OnInit {

    public cashFlow: Cashflow;
    public dataForm: FormGroup;

    constructor(
        private injector: Injector,
        private activeModal: NgbActiveModal,
    ) {
    }

    public ngOnInit(): void {
        this.cashFlow = this.injector.get(Cashflow) || Cashflow.fromObject({});
        this.dataForm = new FormGroup({
            startDate: new FormControl(this.cashFlow.startDate),
            endDate: new FormControl(''),
            amount: new FormControl(''),
            interval: new FormControl(''),
            description: new FormControl('')
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public close(): void {
        this.activeModal.close(this.cashFlow);
    }

}
