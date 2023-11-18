import { Component } from '@angular/core';
import {shareReplay} from "rxjs";
import {AuthService} from "./shared/services/authentication/auth.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ '../styles/root.scss' ]
})
export class AppComponent {
  title = 'Profjecteur';
  user = {status:null}


  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  constructor(private authService: AuthService,
  ) {
    if(!this.isAuthenticated$)
      window.sessionStorage.setItem("auth-user", JSON.stringify(this.user));
  }



  logout() {
    this.authService.logout();
  }

}
