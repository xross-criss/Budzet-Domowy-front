import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TokenGuard} from '../guard/token-guard.service';
import {FooterTextComponent} from './footer-text/footer-text.component';

const routes: Routes = [{
    path: 'footer',
    canActivate: [TokenGuard],
    children: [{
        path: 'easter',
        component: FooterTextComponent,
    },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NavBarRoutingModule {
}
