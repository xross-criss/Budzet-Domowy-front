import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SettingsUserComponent} from './settings-user/settings-user.component';
import {SettingsHouseholdComponent} from './settings-household/settings-household.component';


const routes: Routes = [{
    path:     'settings',
    children: [{
        path:      'user',
        component: SettingsUserComponent,
    }, {
        path:      'household',
        component: SettingsHouseholdComponent,
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SettingsRoutingModule {}
