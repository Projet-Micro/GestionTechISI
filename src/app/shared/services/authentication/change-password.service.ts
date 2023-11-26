import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://profjector-back.onrender.com';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor(private http: HttpClient) {}

  changePassword(userId: string, newPassword: string): Observable<any> {
    const url = `${BASE_URL}/api/users/${userId}/change-password`;

    return this.http.post<any>(url, { newPassword });
  }
}
