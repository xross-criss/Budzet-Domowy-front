import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsHouseholdComponent} from './settings-household/settings-household.component';
import {SettingsUserComponent} from './settings-user/settings-user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SettingsHouseholdModalComponent } from './misc/settings-household-modal/settings-household-modal.component';
import { SettingsUserModalComponent } from './misc/settings-user-modal/settings-user-modal.component';
import { SettingsUserPasswordModalComponent } from './misc/settings-user-password-modal/settings-user-password-modal.component';
import {CommonsModule} from '../../commons/commons.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        SettingsHouseholdComponent,
        SettingsUserComponent,
        SettingsHouseholdModalComponent,
        SettingsUserModalComponent,
        SettingsUserPasswordModalComponent,
    ],
    exports:[
        SettingsHouseholdComponent
    ],
    imports: [
        CommonModule,
        SettingsRoutingModule,
        NgbModule,
        CommonsModule,
        ReactiveFormsModule,
    ]
})
export class SettingsModule {}
