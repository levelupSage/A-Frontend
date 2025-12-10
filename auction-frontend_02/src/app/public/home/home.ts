import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { materialModules } from '../../material.imports';

@Component({
  selector: 'app-home',
  imports: [...materialModules],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
    constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
