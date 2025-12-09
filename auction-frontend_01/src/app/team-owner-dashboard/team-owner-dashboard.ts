import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-team-owner-dashboard',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './team-owner-dashboard.html',
  styleUrl: './team-owner-dashboard.css',
})
export class TeamOwnerDashboard {
  teamRoster = [
    { name: 'Liam Smith', role: 'Forward', image: 'assets/images/Messi.jpg' },
    { name: 'Olivia Jones', role: 'Midfielder', image: 'assets/images/Messi.jpg' },
    { name: 'Noah Davis', role: 'Defender', image: 'assets/images/Messi.jpg' },
    { name: 'Emma Wilson', role: 'Goalie', image: 'assets/images/Messi.jpg' },
  ];
}