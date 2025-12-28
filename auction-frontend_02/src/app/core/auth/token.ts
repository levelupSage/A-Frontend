import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Token {

  private TOKEN_KEY = 'access_token';
  private ROLE_KEY = 'user_role';

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setRole(role: string) {
    localStorage.setItem(this.ROLE_KEY, role);
  }

  getRole() {
    return localStorage.getItem(this.ROLE_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  clear() {
    localStorage.clear();
  }
}
