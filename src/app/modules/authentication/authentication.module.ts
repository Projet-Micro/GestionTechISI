import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { DialogModule } from 'primeng/dialog';
import { PasswordModule } from 'primeng/password';
import { AuthenticationComponent } from './authentication.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [LoginComponent, AuthenticationComponent],
  imports: [
    CommonModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    DividerModule,
    DialogModule,
    FormsModule,
  ],
  exports: [AuthenticationComponent],
})
export class AuthenticationModule {}
