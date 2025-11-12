import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-live-auction',
  imports: [CommonModule, FormsModule],
  templateUrl: './live-auction.html',
  styleUrl: './live-auction.css',
})

export class LiveAuction {
  
player = {
    name: 'Player Alpha',
    imageUrl: 'assets/images/Messi.jpg',
    age: 24,
    nationality: 'Indian',
    sport: 'Cricket',
    battingStyle: 'Right-handed',
    bowlingStyle: 'Left-arm fast'
  };

  userBid = 0;
  currentBid = 50000;
  auctionStatus = 'Running';
  toastMessage = '';

  liveActivity = [
    { message: 'Auction for Player Alpha started!', time: '10:00 AM' }
  ];

  teamBudgets = [
    { name: 'Team Falcons', total: 150000, spent: 125000 },
    { name: 'Team Titans', total: 120000, spent: 98000 },
    { name: 'Team Phoenix', total: 130000, spent: 110000 },
    { name: 'Team Dragons', total: 140000, spent: 135000 }
  ];

  soldPlayers = [
    { name: 'Player Beta', team: 'Team Titans', price: 120000 },
    { name: 'Player Gamma', team: 'Team Phoenix', price: 85000 }
  ];

  setBid(amount: number) {
    this.userBid = this.currentBid + amount;
  }

  placeBid() {
    if (this.userBid <= this.currentBid) {
      this.showToast('Your bid must be higher than the current bid!', 'danger');
      return;
    }
    this.currentBid = this.userBid;
    this.liveActivity.unshift({
      message: `Bid placed: $${this.userBid.toLocaleString()}`,
      time: new Date().toLocaleTimeString()
    });
    this.showToast(`Bid of $${this.userBid.toLocaleString()} placed successfully!`, 'success');
  }

  pauseAuction() {
    this.auctionStatus = 'Paused';
    this.showToast('Auction paused.', 'warning');
  }

  resumeAuction() {
    this.auctionStatus = 'Running';
    this.showToast('Auction resumed.', 'success');
  }

  skipPlayer() {
    this.showToast('Player skipped.', 'info');
  }

  showToast(message: string, type: string) {
    this.toastMessage = message;
    const toastEl = document.getElementById('successToast');
    if (toastEl) {
      toastEl.classList.remove('bg-success', 'bg-danger', 'bg-warning', 'bg-info');
      toastEl.classList.add(`bg-${type}`);
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }
}