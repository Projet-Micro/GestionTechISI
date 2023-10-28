import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    DividerModule,
    DialogModule,
  ],
  exports: [LoginComponent],
})
export class AuthenticationModule {}
