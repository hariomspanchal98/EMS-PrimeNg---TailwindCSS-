import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './login/login';
import { Register } from './register/register';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { IftaLabelModule } from 'primeng/iftalabel';

@NgModule({
  declarations: [
    Login,
    Register
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DialogModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
    FloatLabelModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectModule,
    IftaLabelModule
  ]
})
export class AuthModule { }
