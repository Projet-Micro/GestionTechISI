import {CanActivateFn, Router} from '@angular/router';
import {tap} from "rxjs";
import {inject} from "@angular/core";
import {AuthService} from "../services/authentication/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    return authService.isAuthenticated$.pipe(
      tap((isAuthenticated) => {
          if (!isAuthenticated) {
              router.navigateByUrl('/auth');
          }
          return isAuthenticated;
      })
  );
};
