import { Component } from '@angular/core';
import {AuthService} from "../../shared/services/authentication/auth.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {

  constructor(private authService: AuthService){}


}
