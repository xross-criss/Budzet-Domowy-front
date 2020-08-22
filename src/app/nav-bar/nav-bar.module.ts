import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavBarRoutingModule} from './nav-bar-routing.module';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTextComponent } from './footer-text/footer-text.component';


@NgModule({
    declarations: [
        NavBarComponent,
        FooterComponent,
        FooterTextComponent
    ],
    exports: [
        NavBarComponent,
        FooterComponent
    ],
    imports:      [
        CommonModule,
        NavBarRoutingModule
    ]
})
export class NavBarModule {}
