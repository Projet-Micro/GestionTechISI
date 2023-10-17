import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, PasswordModule, ButtonModule],
  exports: [LoginComponent],
})
export class AuthenticationModule {}
