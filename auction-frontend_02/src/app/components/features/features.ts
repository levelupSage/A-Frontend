import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [CommonModule],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  features = [
    {
      title: 'Modern Strategy',
      desc: 'Customize anything in this template to fit your website needs'
    },
    {
      title: 'Best Relationship',
      desc: 'Contact us immediately if you have a question in mind'
    },
    {
      title: 'Ultimate Marketing',
      desc: 'You just need to tell your friends about our free templates'
    }
  ];
}
