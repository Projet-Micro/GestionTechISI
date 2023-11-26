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
import { ChangePasswordComponent } from './change-password/change-password.component';
@NgModule({
  declarations: [
    LoginComponent,
    AuthenticationComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    PasswordModule,
    ButtonModule,
    CheckboxModule,
    DividerModule,
    DialogModule,
    FormsModule,
  ],
  exports: [AuthenticationComponent, ChangePasswordComponent],
})
export class AuthenticationModule {}
