import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {UserController} from '../../../controllers/user.controller';
import {HouseholdController} from '../../../controllers/household.controller';
import {Household} from '../../../model/Household';

@Component({
    selector: 'app-settings-household',
    templateUrl: './settings-household.component.html',
    styleUrls: ['./settings-household.component.scss']
})
export class SettingsHouseholdComponent implements OnInit {

    public household: Household;
    public userList: User[];

    constructor(
        private userController: UserController,
        private householdController: HouseholdController,
    ) {
    }

    ngOnInit(): void {
        this.householdController.getHousehold().subscribe(household => {
            this.household = household;
        });
        this.userController.getAllUsersForHousehold().subscribe(users => {
            this.userList = users;
        });
    }

    /*    close(): void {
            this.modal.close('dfdfdfd');
        }*/

}
