import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {Household} from "../../model/Household";
import {HouseholdService} from "../../services/household.service";
import {Balance} from '../../model/Balance';
import {BalanceType} from '../../model/dictionary/BalanceType';

@Component({
  selector: 'app-household-settings',
  templateUrl: './app-household-settings.component.html',
  styleUrls: ['./app-household-settings.component.css']
})
export class AppHouseholdSettingComponent implements OnInit {

  public users: User[];
  public household: Household;

  constructor(private householdService: HouseholdService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.householdService.getHousehold().subscribe(household => {
      this.household = household;
    });
    this.userService.getAllUsersForHousehold().subscribe(users => {
      this.users = users;
    });
  }

  saveHousehold(): void {
    this.householdService.updateHousehold(this.household).subscribe(household => {
      this.household = household;
    });
  }

}
