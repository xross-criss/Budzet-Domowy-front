import {Component, OnInit} from '@angular/core';
import {Cashflow} from '../../model/Cashflow';
import {CashflowService} from '../../services/cashflow.service';

@Component({
  selector: 'app-incomes',
  templateUrl: './app-incomes.component.html'
})
export class AppIncomesComponent implements OnInit {

  public incomes: Cashflow[];

  constructor(private cashflowService: CashflowService) {
  }

  ngOnInit(): void {
    this.cashflowService.getCashflowListWithCategory('INCOME').subscribe(incomes => {
      this.incomes = incomes;
    });
  }

}
