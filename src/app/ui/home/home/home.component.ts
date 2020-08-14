import {Component, OnInit} from '@angular/core';
import {Balance} from '../../../model/Balance';
import {User} from '../../../model/User';
import {BalanceController} from '../../../controllers/balance.controller';
import {UserController} from '../../../controllers/user.controller';
import {BalanceType} from '../../../model/dictionary/BalanceType';

@Component({
    selector:    'app-home',
    templateUrl: './home.component.html',
    styleUrls:   ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public summary: Balance;
    public users: User[];
    public username: string = localStorage.getItem('token').split(':')[0];
    public loggedInUser: User;

    constructor(private balanceController: BalanceController, private userController: UserController) {
    }

    ngOnInit(): void {
        this.balanceController.getBalances().subscribe(balance => {
            this.summary = balance.find((value: Balance) => value.type === BalanceType.SUMMARY);
        });
        this.userController.getAllUsersForHousehold().subscribe(users => {
            this.users = users;
        });
    }
}
