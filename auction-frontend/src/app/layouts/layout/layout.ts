import { Component, ViewChild } from '@angular/core';
import { MATERIAL_IMPORTS } from '../../material.imports';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { Navbar } from '../navbar/navbar';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, RouterOutlet, Sidebar, Navbar, ReactiveFormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidebar() {
    this.sidenav.toggle();
  }
}
