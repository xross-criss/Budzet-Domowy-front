import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TokenGuard} from '../../guard/token-guard.service';
import {HouseholdHomeComponent} from './household-home/household-home.component';
import {GoalsComponent} from './goals/goals.component';
import {ExpensesComponent} from './expenses/expenses.component';
import {IncomesComponent} from './incomes/incomes.component';
import {InvestmentsComponent} from './investments/investments.component';
import {InsurancesComponent} from './insurances/insurances.component';
import {LoansComponent} from './loans/loans.component';
import {BalanceService} from '../../services/balance.service';


const routes: Routes = [{
    path: 'household',
    canActivate: [TokenGuard],
    children: [{
        path: 'home',
        component: HouseholdHomeComponent,
    }, {
        path: 'goals',
        component: GoalsComponent,
    }, {
        path: 'expenses',
        component: ExpensesComponent,
    }, {
        path: 'incomes',
        component: IncomesComponent,
    }, {
        path: 'investments',
        component: InvestmentsComponent,
    }, {
        path: 'insurances',
        component: InsurancesComponent,
    }, {
        path: 'loans',
        component: LoansComponent,
    }, {
        path: 'balances',
        component: BalanceService,
    }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HouseholdRoutingModule {
}
