import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authentication/auth.service';
import { UserInfo } from 'src/app/shared/models/user-info';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  user: UserInfo;
  constructor(private authService: AuthService) {
    this.user = {
      id: 0,
      firstName: '',
      lastName: '',
      NIC: 0,
      email: '',
      PSW: '',
    };
  }
  login($event: any) {
    this.user = $event;
    this.loginRequestHandler();
  }
  loginRequestHandler = (): void => {
    this.authService.login(this.user).subscribe(
      data => {
        console.log('Login Successful:', data);
        this.user = data;
      },
      error => {
        console.error('Login Error:', error);
      }
    );
  };
}
