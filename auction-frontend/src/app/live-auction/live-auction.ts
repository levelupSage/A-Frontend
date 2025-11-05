import { Component, OnInit } from '@angular/core';
import { MATERIAL_IMPORTS } from '../material.imports';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-live-auction',
  imports: [CommonModule, FormsModule, ...MATERIAL_IMPORTS],
  templateUrl: './live-auction.html',
  styleUrl: './live-auction.css',
})
export class LiveAuction  implements OnInit {

  // Dummy Data for Display
  auctionTitle: string = 'Cricket Super League Auction 2024';
  auctionStatus: string = 'Live - Bidding Open';

  // Player Info
  playerAlpha = {
    name: 'Player Alpha',
    image: '', // Placeholder image URL for the player
    currentBid: 50000,
    timer: '02:00',
    age: 24,
    nationality: 'Indian',
    sport: 'Cricket',
    battingStyle: 'Right handed',
    bowlingStyle: 'Left-arm fast'
  };

  // Live Activity
  liveActivity = [
    { text: 'Team Falcons placed a bid of **$50,000** for Player Alpha.', time: '10:00:05 AM' },
    { text: 'Auction for Player Alpha is now open!', time: '10:00:00 AM' }
  ];

  // Bidding
  currentHighestBid: number = 55000;
  bidIncrements = [5000, 10000, 25000];
  customBid: number | null = null; 

  // Team Budgets
  teamBudgets = [
    { name: 'Team Falcons', currentBudget: 1250000, totalBudget: 1500000, progress: (1250000 / 1500000) * 100 },
    { name: 'Team Titans', currentBudget: 980000, totalBudget: 1200000, progress: (980000 / 1200000) * 100 },
    { name: 'Team Phoenix', currentBudget: 1100000, totalBudget: 1300000, progress: (1100000 / 1300000) * 100 },
    { name: 'Team Dragons', currentBudget: 1350000, totalBudget: 1400000, progress: (1350000 / 1400000) * 100 }
  ];

  // Sold Players
  soldPlayers = [
    { name: 'Player Beta', team: 'Team Titans', price: 120000 },
    { name: 'Player Gamma', team: 'Team Phoenix', price: 85000 }
  ];

  constructor() { }

  ngOnInit(): void { }

  placeBid(amount: number | null): void {
    if (amount && amount > this.currentHighestBid) {
      this.currentHighestBid = amount;
    }
    this.customBid = null; 
  }
}