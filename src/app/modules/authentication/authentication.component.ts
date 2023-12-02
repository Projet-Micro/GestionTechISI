import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authentication/auth.service';
import { UserInfo } from 'src/app/shared/models/user-info';
import { Router } from '@angular/router';
@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  user: UserInfo;
  rememberUser = false;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.user = {
      FirstName: '',
      LastName: '',
      NIC: 0,
      email: '',
      PSW: '',
      id: 0,
    };
  }

  rememberUserHandler(rememberUser: boolean) {
    this.rememberUser = rememberUser;
  }
  login(userUpdateEvent: UserInfo) {
    this.user = userUpdateEvent;
    this.loginRequestHandler();
  }
  loginRequestHandler = (): void => {
    this.authService.login(this.user).subscribe(
      data => {
        console.log('Login Successful:', data);
        this.user = data;
        this.router.navigateByUrl('/');
      },
      error => {
        console.error('Login Error:', error);
      }
    );
  };
}
