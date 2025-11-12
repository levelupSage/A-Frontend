import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-eventsetup',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './eventsetup.html',
  styleUrl: './eventsetup.css',
})
export class EventSetup implements OnInit {
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

  // Dummy prefilled data
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
form: any;
sports: any;

  ngOnInit(): void {
    console.log('Dummy data loaded for form preview');
  }

  submitForm() {
    console.log('Form Data:', {
      tournamentName: this.tournamentName,
      roundName: this.roundName,
      roundType: this.roundType,
      roundDuration: this.roundDuration,
      roundDate: this.roundDate,
      maxParticipants: this.maxParticipants,
      visibility: this.visibility
    });
    alert('Form submitted with dummy data (check console)');
  }

}
