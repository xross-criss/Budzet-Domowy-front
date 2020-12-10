import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {User} from '../../../model/User';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-sing-up',
    templateUrl: './sing-up.component.html',
    styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

    public dataForm: FormGroup;
    public successfullyRegistered;

    constructor(
        private router: Router,
        private userService: UserService,
    ) {
        this.successfullyRegistered = false;
    }

    public ngOnInit(): void {
        this.dataForm = new FormGroup({
            login: new FormControl(),
            password: new FormControl(),
            email: new FormControl(),
            name: new FormControl(),
        });
    }

    public register(): void {
        this.userService.registerUser(
            User.fromObject(this.dataForm.getRawValue())
        ).subscribe(user => {
            if (!!user.id) {
                this.successfullyRegistered = true;
                setTimeout(() => {
                    this.router.navigate(['/', 'login']);
                }, 2000);
            }
        });

        this.ngOnInit();
    }

}
