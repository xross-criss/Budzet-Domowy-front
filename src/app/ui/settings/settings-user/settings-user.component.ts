import {Component, OnInit} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SettingsHouseholdComponent} from '../settings-household/settings-household.component';
import {User} from '../../../model/User';
import {UserController} from '../../../controllers/user.controller';
import {forkJoin} from 'rxjs';

@Component({
    selector: 'app-settings-user',
    templateUrl: './settings-user.component.html',
    styleUrls: ['./settings-user.component.scss']
})
export class SettingsUserComponent implements OnInit {

    public user: User;

    constructor(
        private ngbModal: NgbModal,
        private userService: UserController,
    ) {
    }

    public ngOnInit(): void {
        this.userService.getUser().subscribe(user => {
            this.user = user;
        });

        // this.ngbModal.open(SettingsHouseholdComponent);
    }

}
