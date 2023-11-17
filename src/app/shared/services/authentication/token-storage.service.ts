import { Injectable } from '@angular/core';


const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  signOut(){
    window.sessionStorage.clear();
    window.sessionStorage.setItem("auth-user", JSON.stringify({status:null}));
  }
  public saveToken(token?: string){
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, String(token));
  }
  public getToken(){
    return window.sessionStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user: any){
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser() {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
