import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../../material.imports';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  imports: [CommonModule, ReactiveFormsModule, ...MATERIAL_IMPORTS]
})
export class Navbar {
  @Output() toggleSidebar = new EventEmitter<void>();
  
  onToggleSidebar() {
    this.toggleSidebar.emit();
  }
}
