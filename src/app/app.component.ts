import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AuthService } from './shared/services/authentication/auth.service';
import {MessageService} from "primeng/api";
import {SocketService} from "./shared/services/socket/socket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles/root.scss'],
})
export class AppComponent {
  title = 'Profjecteur';
  user = { status: null };
  Authenticated: boolean = false;
  isAuthenticated$ = this.authService.isAuthenticated$.pipe(shareReplay(1));

  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private socketService: SocketService,
    private _router: Router
  ) {
    this.isAuthenticated$.subscribe(authenticated => {
      this.Authenticated = authenticated;
      if (!authenticated) {
        window.sessionStorage.setItem('auth-user', JSON.stringify(this.user));
      }
    });
    this.socketService.getMessages().subscribe(({summary, message}) => {
      //console.log("Im in :)")
      this.messageService.add({severity: 'info',
        summary: summary,
        detail: message,});
      this._router.navigate([this._router.url])

    });
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.getIsAuthenticated();
  }
}
