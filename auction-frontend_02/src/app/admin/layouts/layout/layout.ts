import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { materialModules } from '../../../material.imports';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-layout',
  imports: [...materialModules, Sidebar],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  sidebarOpen = true;
  isLargeScreen = true;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isLargeScreen = !result.matches;
    });
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }

}
