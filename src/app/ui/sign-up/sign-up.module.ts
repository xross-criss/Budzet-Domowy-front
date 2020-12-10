import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SingUpComponent } from './sing-up/sing-up.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [SingUpComponent],
    imports: [
        CommonModule,
        SignUpRoutingModule,
        ReactiveFormsModule
    ]
})
export class SignUpModule { }
