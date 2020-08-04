import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

export const routes = [];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule {
}
