import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {TokenGuard} from '../../guard/token-guard.service';

const routes: Routes = [{
    path:      '',
    canActivate: [TokenGuard],
    component: HomeComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
