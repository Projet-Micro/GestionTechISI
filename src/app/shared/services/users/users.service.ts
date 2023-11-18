import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { UserInfo } from '../../models/user-info';

const BASE_URL = 'https://profjector-back.onrender.com';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  model = 'api/users';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getUser(id: number) {
    return this.http.get<UserInfo>(this.getUrlWithID(id));
  }

  getAllUsers(displayNotification: boolean) {
    if (displayNotification) {
      this.messageService.add({
        severity: 'info',
        summary: 'User Fetched!',
        detail: 'Getting all users',
      });
    }
    return this.http.get<UserInfo[]>(this.getUrl());
  }

  createUser(user: UserInfo) {
    return this.http.post<any>(this.getUrl(), user);
  }

  updateUser(user: UserInfo) {
    return this.http.put<any>(this.getUrlWithID(user.id), user);
  }

  deleteUser(id: number) {
    return this.http.delete<any>(this.getUrlWithID(id));
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithID(id: number) {
    return `${this.getUrl()}/${id}`;
  }
}
