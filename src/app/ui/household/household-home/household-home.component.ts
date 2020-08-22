import {Component, OnInit} from '@angular/core';
import {Balance} from '../../../model/Balance';
import {BalanceService} from '../../../services/balance.service';
import {Report} from '../../../model/Report';
import {InvestmentService} from '../../../services/investment.service';
import {LoanService} from '../../../services/loan.service';
import {InsuranceService} from '../../../services/insurance.service';
import {DebtCardsService} from '../../../services/debt-cards.service';
import {DebtCard} from '../../../model/DebtCard';
import {CashflowService} from '../../../services/cashflow.service';
import {Cashflow} from '../../../model/Cashflow';

@Component({
    selector: 'app-household-home',
    templateUrl: './household-home.component.html',
    styleUrls: ['./household-home.component.scss']
})
export class HouseholdHomeComponent implements OnInit {

    public balance: Balance;
    public debtCardList: DebtCard[];
    public cashflowsList: Cashflow[];
    public investmentReport: Report;
    public loansReport: Report;
    public insuranceReport: Report;
    public cashflowReport: Report;

    constructor(
        public balanceService: BalanceService,
        public investmentService: InvestmentService,
        public loanService: LoanService,
        public insuranceService: InsuranceService,
        public debtCardService: DebtCardsService,
        public cashflowService: CashflowService
    ) {
    }

    ngOnInit(): void {
        this.balanceService.getBalances().subscribe(balance => {
            this.balance = balance.find((value: Balance) => value.type === 'SUMMARY');
        });
        this.investmentService.geCurrentMonthBalanceReport().subscribe(report => {
            this.investmentReport = report;
        });
        this.loanService.getCurrentMonthBalanceReport().subscribe(report => {
            this.loansReport = report;
        });
        this.insuranceService.getCurrentMonthBalanceReport().subscribe(report => {
            this.insuranceReport = report;
        });
        this.debtCardService.getDebtsCards().subscribe(debtCards => {
            this.debtCardList = debtCards;
        });
        this.cashflowService.getCurrentMonthBalanceReport().subscribe(report => {
            this.cashflowReport = report;
        });
        this.cashflowService.getCashflowForCurrentMonth().subscribe(cashflow => {
            this.cashflowsList = cashflow;
        });
    }

}
