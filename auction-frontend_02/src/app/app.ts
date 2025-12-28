import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './components/login/login';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isDesktop = window.innerWidth >= 1024;

  @HostListener('window:resize')
  onResize() {
    this.isDesktop = window.innerWidth >= 1024;
  }
}
