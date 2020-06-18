import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppLoginComponent} from './component/login/app-login.component';
import {MatCardModule} from '@angular/material/card';
import {AppBilansComponent} from './component/bilans/app-bilans.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AppHomeComponent} from './component/home/app-home.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {BalanceService} from './services/balance.service';
import {AppNavbarComponent} from './component/navbar/app-navbar.component';
import {UserService} from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    AppLoginComponent,
    AppBilansComponent,
    AppHomeComponent,
    AppNavbarComponent
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
    MatListModule
  ],
  providers: [
    AuthService,
    BalanceService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
