import {Component, OnInit} from '@angular/core';
import {Cashflow} from '../../model/Cashflow';
import {CashflowService} from '../../services/cashflow.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './app-expenses.component.html'
})
export class AppExpensesComponent implements OnInit {

  public expenses: Cashflow[];

  constructor(private cashflowService: CashflowService) {
  }

  ngOnInit(): void {
    this.cashflowService.getCashflowListWithCategory('EXPENSE').subscribe(expenses => {
      this.expenses = expenses;
    });
  }
}
