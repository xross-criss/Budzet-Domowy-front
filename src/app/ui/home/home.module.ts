import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home/home.component';
import {CommonsModule} from '../../commons/commons.module';
import {ChartsModule} from 'ng2-charts';


@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        HomeRoutingModule,
        CommonsModule,
        ChartsModule,
    ]
})
export class HomeModule {
}
