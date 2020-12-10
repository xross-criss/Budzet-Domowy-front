import {Component, Injector, OnInit} from '@angular/core';
import {User} from '../../../../model/User';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-settings-user-password-modal',
    templateUrl: './settings-user-password-modal.component.html',
    styleUrls: ['./settings-user-password-modal.component.scss']
})
export class SettingsUserPasswordModalComponent implements OnInit {

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
            password0: new FormControl([Validators.required]),
            password1: new FormControl([Validators.required]),
            password2: new FormControl([Validators.required]),
        });
    }

    public dismiss(): void {
        this.activeModal.dismiss();
    }

    public close(): void {
        let password0: string = this.dataForm.get('password0').value;
        let password1: string = this.dataForm.get('password1').value;
        let password2: string = this.dataForm.get('password2').value;

        if (password0 == this.user.password) {
            if (password1 == password2) {
                this.user.password = password1;
            }
        }

        this.activeModal.close(this.user);
    }

}
