import {Component, Injector, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User} from '../../../../model/User';

@Component({
    selector: 'app-settings-user-modal',
    templateUrl: './settings-user-modal.component.html',
    styleUrls: ['./settings-user-modal.component.scss']
})
export class SettingsUserModalComponent implements OnInit {

    public user: User;
    public dataForm: FormGroup;

    constructor(
        private injector: Injector,
        private activeModal: NgbActiveModal,
    ) {
    }

    public ngOnInit(): void {
        this.user = this.injector.get(User) || User.fromObject({});
        this.dataForm = new FormGroup({
            name: new FormControl(this.user.name, [Validators.required]),
            email: new FormControl(this.user.email, [Validators.required, Validators.email]),
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public close(): void {
        if (this.dataForm.invalid) {
            return;
        }
        const obj: User = this.dataForm.getRawValue();
        obj.id = this.user.id;
        this.user = User.fromObject(obj);
        this.activeModal.close(this.user);
    }

}
