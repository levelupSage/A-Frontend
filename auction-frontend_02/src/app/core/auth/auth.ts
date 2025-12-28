import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class Auth {

  constructor(private router: Router) {}

  private users = [
    { username: 'admin@gmail.com', password: 'admin123', role: 'ADMIN' },
    { username: 'user@gmail.com', password: 'admin123', role: 'USER'}
  ];

  login(username: string, password: string): boolean {
    const user = this.users.find(
      u => u.username === username && u.password === password
    );

    if (!user) return false;

    localStorage.setItem('token', 'dummy-token');
    localStorage.setItem('role', user.role);

    if (user.role === 'ADMIN') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/user']);
    }

    return true;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }
}
