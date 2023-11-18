import { Injectable } from '@angular/core';
import {TokenStorageService} from "../authentication/token-storage.service";
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
const TOKEN_HEADER_KEY = 'x-access-token';       // for Spring Boot back-end

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private token: TokenStorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTcwMDMwMzY0MCwiZXhwIjoxNzAwNTYyODQwfQ.1GKpbFKtx7fLgq8Nmo6HuXXZQBU2OaukRoFW-9G7SIk';
    if (token != null) {
      authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, token),
      });
      console.log('REQUEST: ', authReq);
    }
    return next.handle(authReq);
  }
}
export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
];
