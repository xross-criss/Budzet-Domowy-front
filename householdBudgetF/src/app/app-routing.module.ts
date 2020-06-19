import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppLoginComponent} from './component/login/app-login.component';
import {TokenGuard} from './guard/token-guard.service';
import {AppBalanceComponent} from './component/balance/app-balance.component';
import {AppHomeComponent} from './component/home/app-home.component';
import {AppExpensesComponent} from "./component/expenses/app-expenses.component";
import {AppIncomesComponent} from "./component/incomes/app-incomes.component";
import {AppSettingsComponent} from "./component/settings/app-settings.component";

const routes: Routes = [
  {path: 'login', component: AppLoginComponent},
  {path: '', component: AppHomeComponent, canActivate: [TokenGuard]},
  {path: 'balance', component: AppBalanceComponent, canActivate: [TokenGuard]},
  {path: 'expenses', component: AppExpensesComponent, canActivate: [TokenGuard]},
  {path: 'incomes', component: AppIncomesComponent, canActivate: [TokenGuard]},
  {path: 'settings', component: AppSettingsComponent, canActivate: [TokenGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
