import {Component, OnInit} from '@angular/core';
import {BalanceService} from '../../services/balance.service';
import {Balance} from '../../model/Balance';
import {BalanceType} from '../../model/dictionary/BalanceType';
import {UserService} from '../../services/user.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  public summary: Balance;
  public users: User[];
  public username: string = localStorage.getItem('token').split(':')[0];
  public loggedInUser: User;

  constructor(private balanceService: BalanceService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.balanceService.getBalances().subscribe(balance => {
      this.summary = balance.find((value: Balance) => value.type === BalanceType.SUMMARY);
    });
    this.userService.getAllUsersForHousehold().subscribe(users => {
      this.users = users;
    });
  }

}
