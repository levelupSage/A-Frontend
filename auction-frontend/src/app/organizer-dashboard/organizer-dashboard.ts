import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MATERIAL_IMPORTS } from '../material.imports';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-organizer-dashboard',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ...MATERIAL_IMPORTS, RouterLink],
  templateUrl: './organizer-dashboard.html',
  styleUrls: ['./organizer-dashboard.css']
})
export class OrganizerDashboard {
  dashboardCards = [
    {
      title: 'Upcoming Events',
      value: '3',
      subtitle: 'Next tournament in 7 days.',
      icon: 'event',
      iconBg: '#E3F2FD',
      iconColor: '#1565C0',
      valueColor: '#1976D2',
      buttonText: 'View All Events',
      buttonColor: 'primary',
      Links : 'eventsetup'
    },
    {
      title: 'Active Auctions',
      value: '1',
      subtitle: 'Live Player Auction #001',
      icon: 'check_circle',
      iconBg: '#E8F5E9',
      iconColor: '#2E7D32',
      valueColor: '#388E3C',
      buttonText: 'Manage Live Auction',
      buttonColor: 'primary'
    },
    {
      title: 'Player Registrations',
      value: '185 / 200',
      subtitle: '15 pending verification.',
      icon: 'people',
      iconBg: '#F3E5F5',
      iconColor: '#7B1FA2',
      valueColor: '#8E24AA',
      buttonText: 'Manage Players',
      buttonColor: 'primary'
    },
    {
      title: 'Budget Overview',
      value: '$45,000',
      subtitle: '90% utilized out of $50,000 allocated.',
      icon: 'attach_money',
      iconBg: '#FFF8E1',
      iconColor: '#F9A825',
      valueColor: '#FBC02D',
      buttonText: 'View Details',
      buttonColor: 'primary',
      progress: 90,
      progressColor: 'primary'
    },
    {
      title: 'Support Tickets',
      value: '2',
      subtitle: 'Urgent: 1, Normal: 1',
      icon: 'support',
      iconBg: '#FFF3E0',
      iconColor: '#EF6C00',
      valueColor: '#F57C00',
      buttonText: 'View Tickets',
      buttonColor: 'primary'
    },
    {
      title: 'Notifications',
      value: '5',
      subtitle: 'Unread announcements.',
      icon: 'notifications',
      iconBg: '#FFEBEE',
      iconColor: '#C62828',
      valueColor: '#D32F2F',
      buttonText: 'View Notifications',
      buttonColor: 'warn'
    }
  ];
}
