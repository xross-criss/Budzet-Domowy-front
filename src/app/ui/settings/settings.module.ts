import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SettingsRoutingModule} from './settings-routing.module';
import {SettingsHouseholdComponent} from './settings-household/settings-household.component';
import {SettingsUserComponent} from './settings-user/settings-user.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    declarations: [
        SettingsHouseholdComponent,
        SettingsUserComponent,
    ],
    exports:[
        SettingsHouseholdComponent
    ],
    imports:      [
        CommonModule,
        SettingsRoutingModule,
        NgbModule,
    ]
})
export class SettingsModule {}
