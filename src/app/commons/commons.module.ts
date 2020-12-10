import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SpinnerComponent} from './spinner/spinner.component';
import {DictionaryPipe} from './pipes/dictionary.pipe';

@NgModule({
    declarations: [
        SpinnerComponent,
        DictionaryPipe,
    ],
    exports: [
        SpinnerComponent,
        DictionaryPipe,
    ],
    imports: [
        CommonModule,
    ],
    providers: [
        DictionaryPipe,
    ],
})
export class CommonsModule {
}
