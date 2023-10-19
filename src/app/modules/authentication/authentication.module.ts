import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    DividerModule,
  ],
  exports: [LoginComponent],
})
export class AuthenticationModule {}
