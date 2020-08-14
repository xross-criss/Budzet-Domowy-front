import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarModule} from './nav-bar/nav-bar.module';
import {HomeModule} from './ui/home/home.module';
import {SettingsModule} from './ui/settings/settings.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './guard/token-interceptor';
import {LoginModule} from './ui/login/login.module';
import {HouseholdModule} from './ui/household/household.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NavBarModule,
        HomeModule,
        SettingsModule,
        LoginModule,
        HouseholdModule,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
