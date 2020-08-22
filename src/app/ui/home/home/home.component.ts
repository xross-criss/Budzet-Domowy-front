import {Component, OnInit} from '@angular/core';
import {Balance} from '../../../model/Balance';
import {User} from '../../../model/User';
import {BalanceService} from '../../../services/balance.service';
import {UserService} from '../../../services/user.service';
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

    constructor(private balanceService: BalanceService, private userService: UserService) {
    }

    ngOnInit(): void {
        this.balanceService.getBalances().subscribe(balance => {
            this.summary = balance.find((value: Balance) => value.type === 'SUMMARY');
        });
        this.userService.getAllUsersForHousehold().subscribe(users => {
            this.users = users;
        });
    }
}
