import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HouseholdRoutingModule} from './household-routing.module';
import {HouseholdHomeComponent} from './household-home/household-home.component';
import {GoalsComponent} from './goals/goals.component';
import {HouseholdHomeInsuranceComponent} from './household-home-insurance/household-home-insurance.component';
import {CommonsModule} from '../../commons/commons.module';
import {HouseholdHomeInvestmentsComponent} from './household-home-investments/household-home-investments.component';
import {HouseholdHomeLoansComponent} from './household-home-loans/household-home-loans.component';
import {HouseholdHomeDebtCardsComponent} from './household-home-debt-cards/household-home-debt-cards.component';
import {HouseholdHomeCashflowComponent} from './household-home-cashflow/household-home-cashflow.component';
import {HouseholdHomeGoalsComponent} from './household-home-goals/household-home-goals.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {IncomesComponent} from './incomes/incomes.component';
import {NgbDatepickerModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InvestmentsComponent} from './investments/investments.component';
import {InsurancesComponent} from './insurances/insurances.component';
import {LoansComponent} from './loans/loans.component';
import {BalancesComponent} from './balances/balances.component';
import {EditCashflowModalComponent} from './misc/edit-cashflow-modal/edit-cashflow-modal.component';
import {EditGoalsModalComponent} from './misc/edit-goals-modal/edit-goals-modal.component';
import {EditInsuranceModalComponent} from './misc/edit-insurance-modal/edit-insurance-modal.component';
import {EditLoanModalComponent} from './misc/edit-loan-modal/edit-loan-modal.component';
import {EditInvestmentModalComponent} from './misc/edit-investment-modal/edit-investment-modal.component';
import {HouseholdHomeGoalComponent} from './household-home-goal/household-home-goal.component';
import {IncomeComponent} from './income/income.component';
import {BalanceComponent} from './balance/balance.component';
import {LoanComponent} from './loan/loan.component';
import {InvestmentComponent} from './investment/investment.component';
import {ExpenseComponent} from './expense/expense.component';
import {InsuranceComponent} from './insurance/insurance.component';
import { DebtCardsComponent } from './debt-cards/debt-cards.component';
import { DebtCardComponent } from './debt-card/debt-card.component';
import { EditDebtCardModalComponent } from './misc/edit-debt-card-modal/edit-debt-card-modal.component';
import { GoalComponent } from './goal/goal.component';
import { HouseholdHomeInsurancesComponent } from './household-home-insurances/household-home-insurances.component';
import { HouseholdHomeCashflowsComponent } from './household-home-cashflows/household-home-cashflows.component';
import { HouseholdHomeInvestmentComponent } from './household-home-investment/household-home-investment.component';
import { HouseholdHomeLoanComponent } from './household-home-loan/household-home-loan.component';
import { HouseholdHomeDebtCardComponent } from './household-home-debt-card/household-home-debt-card.component';
import {ChartsModule} from 'ng2-charts';

@NgModule({
    declarations: [
        HouseholdHomeComponent,
        GoalsComponent,
        HouseholdHomeInsuranceComponent,
        HouseholdHomeInvestmentsComponent,
        HouseholdHomeLoansComponent,
        HouseholdHomeDebtCardsComponent,
        HouseholdHomeCashflowComponent,
        HouseholdHomeGoalsComponent,
        ExpensesComponent,
        IncomesComponent,
        InvestmentsComponent,
        InsurancesComponent,
        LoansComponent,
        BalancesComponent,
        EditCashflowModalComponent,
        EditGoalsModalComponent,
        EditInsuranceModalComponent,
        EditLoanModalComponent,
        EditInvestmentModalComponent,
        HouseholdHomeGoalComponent,
        IncomeComponent,
        BalanceComponent,
        LoanComponent,
        InvestmentComponent,
        ExpenseComponent,
        InsuranceComponent,
        DebtCardsComponent,
        DebtCardComponent,
        EditDebtCardModalComponent,
        GoalComponent,
        HouseholdHomeInsurancesComponent,
        HouseholdHomeCashflowsComponent,
        HouseholdHomeInvestmentComponent,
        HouseholdHomeLoanComponent,
        HouseholdHomeDebtCardComponent,
    ],
    imports: [
        CommonModule,
        CommonsModule,
        HouseholdRoutingModule,
        NgbDatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        ChartsModule,
    ],
    exports: [
        EditCashflowModalComponent
    ]
})
export class HouseholdModule {
}
