import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MATERIAL_IMPORTS } from '../../material.imports';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, CommonModule, ReactiveFormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  sidebarOpen = true;


}
