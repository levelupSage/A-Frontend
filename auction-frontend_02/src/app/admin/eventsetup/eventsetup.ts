import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { materialModules } from '../../material.imports';

@Component({
  selector: 'app-eventsetup',
  standalone: true,
  imports: [CommonModule, FormsModule, ...materialModules],
  templateUrl: './eventsetup.html',
  styleUrl: './eventsetup.css',
})
export class EventSetup implements OnInit {

  constructor(private snackBar: MatSnackBar) {}

  roundTypes = [
    { value: 'qualifier', label: 'Qualifier Round' },
    { value: 'semifinal', label: 'Semi Final' },
    { value: 'final', label: 'Final Match' }
  ];

  visibilityOptions = [
    { value: 'public', label: 'Public' },
    { value: 'private', label: 'Private' },
    { value: 'restricted', label: 'Restricted Access' }
  ];

  tournamentName = 'Annual Football Championship';
  tournamentCode = 'AFC2024';
  description = 'The premier football event bringing together top national teams for an exciting competition.';

  startDate = '2024-09-01';
  endDate = '2024-09-15';

  roundName = 'Quarter Final';
  roundDuration = 90;
  roundType = 'semifinal';
  roundDate = '2024-09-10';
  maxParticipants = 16;
  visibility = 'public';

  ngOnInit(): void {
    console.log('Dummy data loaded for form preview');
  }

  submitForm() {

    // Simple validation
    if (!this.tournamentName || !this.tournamentCode) {
      this.openSnackBar('Please fill all required fields', 'error-snackbar');
      return;
    }

    console.log('Form Data:', {
      tournamentName: this.tournamentName,
      roundName: this.roundName,
      roundType: this.roundType,
      roundDuration: this.roundDuration,
      roundDate: this.roundDate,
      maxParticipants: this.maxParticipants,
      visibility: this.visibility
    });

    this.openSnackBar(
      'Event configuration saved successfully',
      'success-snackbar'
    );
  }

  private openSnackBar(message: string, panelClass: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      horizontalPosition: 'right',
verticalPosition: 'bottom',
      panelClass: [panelClass]
    });
  }
}
