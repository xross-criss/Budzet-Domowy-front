import {Component, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {UserService} from "../../services/user.service";
import {Household} from "../../model/Household";
import {HouseholdService} from "../../services/household.service";

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
    this.householdService.getHousehold().toPromise()
      .then(household => {
        this.household = household;
        console.log(this.household);
      })
      .catch(err => {
        console.log(err);
      })
      .then(() => this.userService.getAllUsersForHousehold().toPromise())
      .then(users => {
        this.users = users;
        console.log(this.users);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
