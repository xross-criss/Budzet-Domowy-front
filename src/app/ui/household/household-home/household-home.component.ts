import {Component, OnInit} from '@angular/core';
import {Balance} from '../../../model/Balance';
import {BalanceType} from '../../../model/dictionary/BalanceType';
import {BalanceController} from '../../../controllers/balance.controller';
import {Investment} from '../../../model/Investment';
import {Report} from '../../../model/Report';
import {InvestmentController} from '../../../controllers/investment.controller';
import {Loan} from '../../../model/Loan';
import {LoanController} from '../../../controllers/loan.controller';
import {Insurance} from '../../../model/Insurance';
import {InsuranceController} from '../../../controllers/insurance.controller';
import {DebtCardsController} from '../../../controllers/debt-cards.controller';
import {DebtCard} from '../../../model/DebtCard';
import {CashflowController} from '../../../controllers/cashflow.controller';
import {Cashflow} from '../../../model/Cashflow';

@Component({
    selector: 'app-household-home',
    templateUrl: './household-home.component.html',
    styleUrls: ['./household-home.component.scss']
})
export class HouseholdHomeComponent implements OnInit {

    public balance: Balance;
    public investmentsList: Investment[];
    public loansList: Loan[];
    public insuranceList: Insurance[];
    public debtCardList: DebtCard[];
    public cashflowsList: Cashflow[];
    public investmentReport: Report;
    public loansReport: Report;
    public insuranceReport: Report;
    public cashflowReport: Report;

    constructor(
        public balanceController: BalanceController,
        public investmentController: InvestmentController,
        public loanController: LoanController,
        public insuranceController: InsuranceController,
        public debtCardController: DebtCardsController,
        public cashflowController: CashflowController
    ) {
    }

    ngOnInit(): void {
        this.balanceController.getBalances().subscribe(balance => {
            this.balance = balance.find((value: Balance) => value.type === BalanceType.SUMMARY);
        });
        this.investmentController.geCurrentMonthBalanceReport().subscribe(report => {
            this.investmentReport = report;
        });
        this.investmentController.getInvestmentForCurrentMonth().subscribe(investments => {
            this.investmentsList = investments;
        });
        this.loanController.getCurrentMonthBalanceReport().subscribe(report => {
            this.loansReport = report;
        });
        this.loanController.getLoans().subscribe(loans => {
            this.loansList = loans;
        });
        this.insuranceController.getCurrentMonthBalanceReport().subscribe(report => {
            this.insuranceReport = report;
        });
        this.insuranceController.getInsuranceForCurrentMonth().subscribe(insurances => {
            this.insuranceList = insurances;
        });
        this.debtCardController.getDebtsCards().subscribe(debtCards => {
            this.debtCardList = debtCards;
        });
        this.cashflowController.getCurrentMonthBalanceReport().subscribe(report => {
            this.cashflowReport = report;
        });
        this.cashflowController.getCashflowForCurrentMonth().subscribe(cashflow => {
            this.cashflowsList = cashflow;
        });
    }

}
