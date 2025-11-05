import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from "./layouts/sidebar/sidebar";
import { Navbar } from "./layouts/navbar/navbar";
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, MatSidenavModule],
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
