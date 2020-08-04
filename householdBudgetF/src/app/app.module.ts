import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppLoginComponent} from './component/login/app-login.component';
import {MatCardModule} from '@angular/material/card';
import {AppBalanceComponent} from './component/balance/app-balance.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AppHomeComponent} from './component/home/app-home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {BalanceService} from './services/balance.service';
import {AppNavbarComponent} from './component/navbar/app-navbar.component';
import {UserService} from './services/user.service';
import {AppIncomesComponent} from './component/incomes/app-incomes.component';
import {AppExpensesComponent} from './component/expenses/app-expenses.component';
import {MatTableModule} from '@angular/material/table';
import {AppSettingsComponent} from './component/settings/app-settings.component';
import {AppHouseholdSettingComponent} from './component/household-settings/app-household-settings.component';
import {CashflowService} from './services/cashflow.service';
import {HouseholdService} from './services/household.service';
import {TokenInterceptor} from './guard/token-interceptor';
import {HomeModule} from './ui/home/home.module';

@NgModule({
    declarations: [
        AppComponent,
        AppLoginComponent,
        AppBalanceComponent,
        AppHomeComponent,
        AppNavbarComponent,
        AppIncomesComponent,
        AppExpensesComponent,
        AppSettingsComponent,
        AppHouseholdSettingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatListModule,
        MatTableModule,
        HomeModule,
    ],
    providers: [
        AuthService,
        BalanceService,
        UserService,
        CashflowService,
        HouseholdService,
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
