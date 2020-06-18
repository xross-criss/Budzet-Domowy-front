import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLoginComponent} from './component/login/app-login.component';
import {TokenGuard} from './guard/token-guard.service';
import {AppBalanceComponent} from './component/balance/app-balance.component';
import {AppHomeComponent} from './component/home/app-home.component';
import {AppExpensesComponent} from "./component/expenses/app-expenses.component";
import {AppIncomesComponent} from "./component/incomes/app-incomes.component";

const routes: Routes = [
  {path: 'login', component: AppLoginComponent},
  {path: 'balance', component: AppBalanceComponent, canActivate: [TokenGuard]},
  {path: 'expenses', component: AppExpensesComponent, canActivate: [TokenGuard]},
  {path: 'incomes', component: AppIncomesComponent, canActivate: [TokenGuard]},
  {path: '', component: AppHomeComponent, canActivate: [TokenGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
