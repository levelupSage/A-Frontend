import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { materialModules } from '../../material.imports';

@Component({
  selector: 'app-navbar',
  imports: [...materialModules],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
