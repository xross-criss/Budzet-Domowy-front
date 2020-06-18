import {Component, OnInit} from '@angular/core';
import {BalanceService} from '../../services/balance.service';
import {Balance} from '../../model/Balance';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  public balance: Balance;

  constructor(private balanceService: BalanceService) {
  }

  ngOnInit(): void {
    this.balanceService.getBalances()
      .toPromise()
      .then(balance => {
        this.balance = balance;
      })
      .catch(err => {
        console.log(err);
      });
  }

}
