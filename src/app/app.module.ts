import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarModule} from './nav-bar/nav-bar.module';
import {HomeModule} from './ui/home/home.module';
import {SettingsModule} from './ui/home/settings/settings.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports:      [
        BrowserModule,
        AppRoutingModule,
        NavBarModule,
        HomeModule,
        SettingsModule,
    ],
    providers:    [],
    bootstrap:    [AppComponent]
})
export class AppModule {}
