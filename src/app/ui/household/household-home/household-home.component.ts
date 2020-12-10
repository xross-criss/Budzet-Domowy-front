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
import {Goal} from '../../../model/Goal';
import {GoalsService} from '../../../services/goals.service';
import {Insurance} from '../../../model/Insurance';
import {Investment} from '../../../model/Investment';
import {Loan} from '../../../model/Loan';
import {ChartOptions, ChartType} from 'chart.js';
import {Label, SingleDataSet} from 'ng2-charts';

@Component({
    selector: 'app-household-home',
    templateUrl: './household-home.component.html',
    styleUrls: ['./household-home.component.scss']
})
export class HouseholdHomeComponent implements OnInit {

    public pieChartOptions: ChartOptions = {
        responsive: true,
    };

    public pieChartLabels: Label[] = ['Przychody', 'Wydatki'];
    public pieChartData: SingleDataSet;
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];

    public balance: Balance;
    public debtCardList: DebtCard[];
    public cashflowsList: Cashflow[];
    public investmentReport: Report;
    public loansReport: Report;
    public insuranceReport: Report;
    public cashflowReport: Report;
    public incomeCashflowList: Cashflow[];
    public expenseCashflowList: Cashflow[];
    public savingsList: Goal[];
    public shoppingList: Goal[];
    public lifeInsurancesList: Insurance[];
    public carInsurancesList: Insurance[];
    public houseInsurancesList: Insurance[];
    public otherInsurancesList: Insurance[];
    public investmentList: Investment[];
    public stockInvestmentList: Investment[];
    public stockDynamicInvestmentList: Investment[];
    public loansList: Loan[];
    public debtCardsList: DebtCard[];

    constructor(
        public balanceService: BalanceService,
        public investmentService: InvestmentService,
        public loanService: LoanService,
        public insuranceService: InsuranceService,
        public debtCardService: DebtCardsService,
        public cashflowService: CashflowService,
        public goalsService: GoalsService,
    ) {
        this.incomeCashflowList = [];
        this.expenseCashflowList = [];
        this.savingsList = [];
        this.shoppingList = [];
        this.lifeInsurancesList = [];
        this.carInsurancesList = [];
        this.houseInsurancesList = [];
        this.otherInsurancesList = [];
        this.stockInvestmentList = [];
        this.stockDynamicInvestmentList = [];
        this.investmentList = [];
        this.loansList = [];
    }

    ngOnInit(): void {
        this.pieChartData = [];
        this.balanceService.getBalances().subscribe(balance => {
            this.balance = balance.find((value: Balance) => value.type === 'SUMMARY');
            this.pieChartData.push(this.balance.income);
            this.pieChartData.push(this.balance.burden);
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

        this.cashflowService.getCashflowForCurrentMonth().subscribe(cashflowList => {
            cashflowList.forEach(cashflow => {
                if (cashflow.category === 'INCOME') {
                    this.incomeCashflowList.push(cashflow);
                } else {
                    this.expenseCashflowList.push(cashflow);
                }
            });
        });

        this.goalsService.getGoals().subscribe((goalsList: Goal[]) => {
            for (let goal of goalsList) {
                if (goal.category === 'SAVINGS') {
                    this.savingsList.push(goal);
                } else {
                    this.shoppingList.push(goal);
                }
            }
        });

        this.insuranceService.getInsurances().subscribe((insuranceList: Insurance[]) => {
            for (let insurance of insuranceList) {
                if (insurance.type == 'LIFE') {
                    this.lifeInsurancesList.push(insurance);
                } else if (insurance.type == 'CAR') {
                    this.carInsurancesList.push(insurance);
                } else if (insurance.type == 'HOUSE') {
                    this.houseInsurancesList.push(insurance);
                } else {
                    this.otherInsurancesList.push(insurance);
                }
            }
        });

        this.investmentService.getInvestments().subscribe((investments: Investment[]) => {
            for (let investment of investments) {
                if (investment.type == 'STOCK') {
                    this.stockInvestmentList.push(investment);
                } else if (investment.type == 'STOCK_DYNAMIC') {
                    this.stockDynamicInvestmentList.push(investment);
                } else {
                    this.investmentList.push(investment);
                }
            }
        });

        this.loanService.getLoans().subscribe(loansList => this.loansList = loansList);

        this.debtCardService.getDebtsCards().subscribe(debtCardsList => this.debtCardsList = debtCardsList);

    }
}
