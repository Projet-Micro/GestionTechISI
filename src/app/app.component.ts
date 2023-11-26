import { Component } from '@angular/core';
import { shareReplay } from 'rxjs';
import { AuthService } from './shared/services/authentication/auth.service';
import { ModalVisibilityService } from './shared/services/modal-visibility/modal-visibility.service';

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
    private modalservice: ModalVisibilityService
  ) {
    this.isAuthenticated$.subscribe(authenticated => {
      this.Authenticated = authenticated;
      if (!authenticated) {
        window.sessionStorage.setItem('auth-user', JSON.stringify(this.user));
      }
    });
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.getIsAuthenticated();
  }
}
