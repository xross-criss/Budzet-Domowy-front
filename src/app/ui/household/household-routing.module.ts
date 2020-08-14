import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TokenGuard} from '../../guard/token-guard.service';
import {HouseholdHomeComponent} from './household-home/household-home.component';
import {GoalsComponent} from './goals/goals.component';


const routes: Routes = [{
    path: 'household',
    canActivate: [TokenGuard],
    children: [{
        path: 'home',
        component: HouseholdHomeComponent,
    }, {
        path: 'goals',
        component: GoalsComponent,
    }]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HouseholdRoutingModule {
}
