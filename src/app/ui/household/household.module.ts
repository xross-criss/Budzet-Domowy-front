import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HouseholdRoutingModule} from './household-routing.module';
import {HouseholdHomeComponent} from './household-home/household-home.component';
import {GoalsComponent} from './goals/goals.component';


@NgModule({
    declarations: [HouseholdHomeComponent, GoalsComponent],
    imports: [
        CommonModule,
        HouseholdRoutingModule
    ]
})
export class HouseholdModule {
}
