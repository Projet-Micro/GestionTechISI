import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const BASE_URL = 'https://profjector-back.onrender.com';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  constructor(private http: HttpClient) {}

  changePassword(userId: number, newPassword: string): Observable<any> {
    const url = `${BASE_URL}/api/users/${userId}/change-password`;
    const requestBody = { newPassword };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Add any necessary authorization headers here if required
      }),
    };

    return this.http
      .post<any>(url, requestBody, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // Handle error responses here, log them or perform appropriate actions
    return throwError('Something went wrong; please try again later.');
  }
}
