import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { UserInfo } from '../../models/user-info';
import { catchError, tap } from 'rxjs/operators';

const BASE_URL = 'https://profjector-back.onrender.com';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject(
    this.getIsAuthenticated() || false
  );
  isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private messageService: MessageService
  ) {}

  login(user: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>(this.getUrl(), user).pipe(
      tap((data: UserInfo) => {
        if (!data.status) {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);
          this.setIsAuthenticated(true);
          this.router.navigateByUrl('/');
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'User Not Authorized!',
            detail: 'This is an Admin only dashboard!',
          });
        }
      }),
      catchError(err => {
        if (err.error == null) {
          this.messageService.add({
            severity: 'error',
            summary: 'Login Failed!',
            detail: 'Bad Credentials: Email and/or Password are incorrect',
          });
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.message,
          });
        }
        throw err;
      })
    );
  }
  logout() {
    this.setIsAuthenticated(false);
    this.isAuthenticated.next(false);
    this.tokenStorage.signOut();
    this.router.navigateByUrl('/auth');
  }

  register(user: UserInfo) {
    console.log(
      'NEW USER: ' + JSON.stringify(user) + '\n HAS BEEN REGISTERED!'
    );
    this.http.post<any>(this.getUrl() + '/signup', user).subscribe(
      data => {
        this.messageService.add({
          severity: 'success',
          summary: 'User Registered!',
          detail: data.message,
        });
      },
      err => {
        if (err.error == null)
          this.messageService.add({
            severity: 'error',
            summary: 'Register Failed!',
            detail: 'Bad Credentials: Email and/or Password are invalid',
          });
        else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.message,
          });
        }
      }
    );
  }

  private getIsAuthenticated(): boolean {
    return window.sessionStorage.getItem('isLoggedIn') !== 'false';
  }

  private setIsAuthenticated(isAuthenticated: boolean) {
    this.isAuthenticated.next(true);
    window.sessionStorage.setItem('isLoggedIn', String(isAuthenticated));
  }

  private getUrl() {
    return `${BASE_URL}/api/users/login`;
  }
}
