import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type BidStatus = 'Accepted' | 'Pending' | 'Outbid' | 'Rejected';
export type BidSort = 'Date (Newest)' | 'Date (Oldest)' | 'Amount (High)' | 'Amount (Low)';

export interface Bid {
  id: number;
  player: string;
  team: string;
  amount: number;
  status: BidStatus;
  timestamp: string; // YYYY-MM-DD HH:MM AM/PM
}
@Component({
  selector: 'app-bid-history',
  imports: [CommonModule, FormsModule  ],
  templateUrl: './bid-history.html',
  styleUrl: './bid-history.css',
})
export class BidHistory implements OnInit {
prevPage() {
throw new Error('Method not implemented.');
}
nextPage() {
throw new Error('Method not implemented.');
}

  // --- Data & State ---
  allBids: Bid[] = [
    { id: 1, player: 'Alice Johnson', team: 'Team A', amount: 75000, status: 'Accepted', timestamp: '2024-07-20 10:30 AM' },
    { id: 2, player: 'Bob Smith', team: 'Team B', amount: 60000, status: 'Pending', timestamp: '2024-07-20 10:25 AM' },
    { id: 3, player: 'Charlie Brown', team: 'Team A', amount: 82000, status: 'Outbid', timestamp: '2024-07-20 10:20 AM' },
    { id: 4, player: 'Diana Prince', team: 'Team C', amount: 90000, status: 'Accepted', timestamp: '2024-07-20 10:15 AM' },
    { id: 5, player: 'Ethan Hunt', team: 'Team D', amount: 55000, status: 'Rejected', timestamp: '2024-07-20 10:10 AM' },
    { id: 6, player: 'Frank White', team: 'Team B', amount: 65000, status: 'Pending', timestamp: '2024-07-19 09:00 AM' },
    { id: 7, player: 'Grace Lee', team: 'Team C', amount: 70000, status: 'Accepted', timestamp: '2024-07-19 08:30 AM' },
    // Add more dummy data for pagination
  ];

  // Data displayed after filtering/sorting
  filteredBids: Bid[] = []; 
  
  // Data visible on the current page
  paginatedBids: Bid[] = []; 

  // --- Filter State ---
  searchTerm: string = '';
  selectedStatus: string = 'All Statuses'; // Options: 'All Statuses' or a BidStatus
  selectedSort: BidSort = 'Date (Newest)';

  // --- Pagination State ---
  currentPage: number = 1;
  itemsPerPage: number = 5; 
  totalPages: number = 1;
  pages: number[] = [];

  ngOnInit(): void {
    // Initialize data on load
    this.applyFilters();
  }

  // --- Core Logic ---

  /** Applies search, status filter, and sort order, then updates pagination. */
  applyFilters(): void {
    let result = [...this.allBids]; // Use a copy of the master list

    // 1. Filter by Status
    if (this.selectedStatus !== 'All Statuses') {
      result = result.filter(bid => bid.status === this.selectedStatus);
    }

    // 2. Filter by Search Term (Player, Team)
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(bid => 
        bid.player.toLowerCase().includes(term) ||
        bid.team.toLowerCase().includes(term)
      );
    }
    
    // 3. Sort
    result.sort((a, b) => {
        // Convert timestamp strings to Date objects for accurate comparison
        const dateA = new Date(a.timestamp);
        const dateB = new Date(b.timestamp);

        if (this.selectedSort.includes('Date')) {
            return this.selectedSort.includes('Newest') ? 
                   dateB.getTime() - dateA.getTime() : 
                   dateA.getTime() - dateB.getTime();
        } else if (this.selectedSort.includes('Amount')) {
            return this.selectedSort.includes('High') ? 
                   b.amount - a.amount : 
                   a.amount - b.amount;
        }
        return 0; // Default no change
    });


    this.filteredBids = result;
    this.currentPage = 1; // Reset to first page after filter/search/sort
    this.updatePagination();
    this.applyPagination();
  }

  // --- Pagination & Navigation ---

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredBids.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  applyPagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedBids = this.filteredBids.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyPagination();
    }
  }

  // Action Stubs
  viewDetails(bid: Bid): void {
    console.log('View Details for Bid ID:', bid.id);
  }

  cancelBid(bid: Bid): void {
    console.log('Cancelling Bid ID:', bid.id);
    // Logic to update bid status to 'Cancelled' and refresh table
  }

  // Currency pipe helper for display in HTML (assuming you have Angular's CurrencyPipe)
  formatCurrency(amount: number): string {
    return '$' + amount.toLocaleString('en-US');
  }
}