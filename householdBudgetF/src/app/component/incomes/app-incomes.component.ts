import {Component, OnInit} from '@angular/core';
import {Cashflow} from "../../model/Cashflow";
import {CashflowService} from "../../services/cashflow.service";
import {CashflowCategory} from "../../model/dictionary/CashflowCategory";

@Component({
  selector: 'app-incomes',
  templateUrl: './app-incomes.component.html'
})
export class AppIncomesComponent implements OnInit {


  public incomes: Cashflow[];
  public username: string = localStorage.getItem('token').split(':')[0];

  constructor(private cashflowService: CashflowService) {
  }

  ngOnInit(): void {
    this.cashflowService.getCashflowListWithCategory(CashflowCategory.INCOME.toString())
      .toPromise()
      .then(cashflow => {
        this.incomes.concat(cashflow);
        console.log(this.incomes, cashflow);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
