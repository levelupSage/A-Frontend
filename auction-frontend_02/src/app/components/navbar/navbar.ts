import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { materialModules } from '../../material.imports';

@Component({
  selector: 'app-navbar',
  imports: [...materialModules],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
}
