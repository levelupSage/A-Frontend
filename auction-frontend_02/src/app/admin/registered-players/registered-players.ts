import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

export type PlayerStatus = 'Verified' | 'Pending Review' | 'Rejected' | 'All';

export interface Player {
  id: number;
  photoUrl: string;
  name: string;
  email: string;
  sport: string;
  status: Exclude<PlayerStatus, 'All'>;
  regDate: string;
}

@Component({
  selector: 'app-registered-players',
  imports: [CommonModule, FormsModule  ],
  templateUrl: './registered-players.html',
  styleUrl: './registered-players.css',
})
export class RegisteredPlayers implements OnInit{

  
  // Full, unfiltered dataset
  allPlayers: Player[] = [
    { id: 1, photoUrl: 'assets/images/Messi.jpg', name: 'Alice Johnson', email: 'alice@example.com', sport: 'Cricket', status: 'Verified', regDate: '2023-01-15' },
    { id: 2, photoUrl: 'assets/images/Messi.jpg', name: 'Bob Smith', email: 'bob@example.com', sport: 'Football', status: 'Pending Review', regDate: '2023-02-20' },
    { id: 3, photoUrl: 'assets/images/Messi.jpg', name: 'Charlie Brown', email: 'charlie@example.com', sport: 'Basketball', status: 'Verified', regDate: '2023-03-01' },
    { id: 4, photoUrl: 'assets/images/Messi.jpg', name: 'Diana Prince', email: 'diana@example.com', sport: 'Tennis', status: 'Rejected', regDate: '2023-03-10' },
    { id: 5, photoUrl: 'assets/images/Messi.jpg', name: 'Eve Davis', email: 'eve@example.com', sport: 'Cricket', status: 'Pending Review', regDate: '2023-04-05' },
    { id: 6, photoUrl: 'assets/images/Messi.jpg', name: 'Frank White', email: 'frank@example.com', sport: 'Football', status: 'Verified', regDate: '2022-04-18' },
    { id: 7, photoUrl: 'assets/images/Messi.jpg', name: 'Grace Lee', email: 'grace@example.com', sport: 'Basketball', status: 'Pending Review', regDate: '2023-05-02' }
    // Add more players here to fully test pagination (e.g., 20 items total)
  ];

  // Data to be displayed after filtering/searching
  filteredPlayers: Player[] = []; 
  
  // Data visible on the current page
  paginatedPlayers: Player[] = []; 

  // --- State Variables ---
  
  currentStatus: PlayerStatus = 'All';
  searchTerm: string = '';
  
  // Pagination State
  currentPage: number = 1;
  itemsPerPage: number = 5; // Set to 5 for demonstration
  totalPages: number = 1;
  pages: number[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterAndPaginate();
  }

  // --- Core Logic ---

  /**
   * Main function to apply all filters (status and search) and then paginate.
   */
  filterAndPaginate(): void {
    let result = this.allPlayers;

    // 1. Filter by Status
    if (this.currentStatus !== 'All') {
      result = result.filter(player => player.status === this.currentStatus);
    }

    // 2. Filter by Search Term
    if (this.searchTerm) {
      const term = this.searchTerm.toLowerCase();
      result = result.filter(player => 
        player.name.toLowerCase().includes(term) ||
        player.email.toLowerCase().includes(term) ||
        player.sport.toLowerCase().includes(term)
      );
    }
    
    this.filteredPlayers = result;
    this.currentPage = 1; // Reset to first page after filter/search
    this.updatePagination();
    this.applyPagination();
  }

  /**
   * Updates pagination metadata (total pages, page numbers).
   */
  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredPlayers.length / this.itemsPerPage);
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  /**
   * Slices the filtered array to get the data for the current page.
   */
  applyPagination(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedPlayers = this.filteredPlayers.slice(startIndex, endIndex);
  }

  // --- Event Handlers ---

  onStatusChange(status: PlayerStatus): void {
    this.currentStatus = status;
    this.filterAndPaginate();
  }

  onSearchChange(): void {
    // This function is triggered by (ngModelChange) or (keyup) on the input
    this.filterAndPaginate();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.applyPagination();
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  // Action stub for buttons
  viewPlayer(player: Player): void {
    console.log('Viewing Player:', player.name);
    // Implement Angular routing or modal opening here
  }
}