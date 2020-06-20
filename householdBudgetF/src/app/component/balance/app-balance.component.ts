import {Component, OnInit} from '@angular/core';
import {Balance} from '../../model/Balance';
import {BalanceService} from '../../services/balance.service';
import {Observable} from 'rxjs';
import {concatMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-balance',
  templateUrl: './app-balance.component.html'
})
export class AppBalanceComponent implements OnInit {

  public balances: Balance[];

  constructor(private balanceService: BalanceService) {
  }

  public ngOnInit(): void {
    this.fetchBalances().subscribe();
  }

  public fetchBalances(): Observable<any> {
    return this.balanceService.getBalances().pipe(tap(balances => {
      this.balances = balances;
    }));
  }

  public generate(): void {
    this.balanceService.generate().subscribe(balance => {
      this.balances = this.balances.concat(balance);
    });
  }

}
