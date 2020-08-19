import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HouseholdRoutingModule} from './household-routing.module';
import {HouseholdHomeComponent} from './household-home/household-home.component';
import {GoalsComponent} from './goals/goals.component';
import {HouseholdHomeInsuranceComponent} from './household-home-insurance/household-home-insurance.component';
import {CommonsModule} from '../../commons/commons.module';
import { HouseholdHomeInvestmentsComponent } from './household-home-investments/household-home-investments.component';
import { HouseholdHomeLoansComponent } from './household-home-loans/household-home-loans.component';
import { HouseholdHomeDebtCardsComponent } from './household-home-debt-cards/household-home-debt-cards.component';
import { HouseholdHomeCashflowComponent } from './household-home-cashflow/household-home-cashflow.component';
import { HouseholdHomeGoalsComponent } from './household-home-goals/household-home-goals.component';

@NgModule({
    declarations: [
        HouseholdHomeComponent,
        GoalsComponent,
        HouseholdHomeInsuranceComponent,
        HouseholdHomeInvestmentsComponent,
        HouseholdHomeLoansComponent,
        HouseholdHomeDebtCardsComponent,
        HouseholdHomeCashflowComponent,
        HouseholdHomeGoalsComponent
    ],
    imports: [
        CommonModule,
        CommonsModule,
        HouseholdRoutingModule
    ]
})
export class HouseholdModule {
}
