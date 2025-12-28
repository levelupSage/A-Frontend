import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../core/auth/auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {
  username = '';
  password = '';
  error = '';

  constructor(private auth: Auth) { }

  onLogin() {
    const success = this.auth.login(this.username, this.password);

    if (!success) {
      this.error = 'Invalid username or password';
    }
    const modal = document.getElementById('loginModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
      document.querySelector('.modal-backdrop')?.remove();
    }
  }
}
