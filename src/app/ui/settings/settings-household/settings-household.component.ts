import {Component, OnInit} from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../../../services/user.service';
import {HouseholdService} from '../../../services/household.service';
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
        private userService: UserService,
        private householdService: HouseholdService,
    ) {
    }

    ngOnInit(): void {
        this.householdService.getHousehold().subscribe(household => {
            this.household = household;
        });
        this.userService.getAllUsersForHousehold().subscribe(users => {
            this.userList = users;
        });
    }

    /*    close(): void {
            this.modal.close('dfdfdfd');
        }*/

}
