import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppLoginComponent} from './component/login/app-login.component';
import {TokenGuard} from './guard/token-guard.service';
import {AppBilansComponent} from './component/bilans/app-bilans.component';

const routes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path: 'bilans', component: AppBilansComponent, canActivate: [TokenGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
