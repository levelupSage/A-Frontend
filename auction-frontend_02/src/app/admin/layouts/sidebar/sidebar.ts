import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { materialModules } from '../../../material.imports';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, ...materialModules],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  sidebarOpen = true;
  
  
  logout() {
    localStorage.clear();
    window.location.href = '/login';
  }


}
