import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Features } from '../features/features';
import { CommonModule } from '@angular/common';
import { materialModules } from '../../material.imports';

@Component({
  selector: 'app-hero',
  imports: [Navbar, Features, CommonModule, ...materialModules],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  backgroundImage = 'assets/dashboard/image_01.jpg';

  carouselImages = [
    'assets/dashboard/image_01.jpg',
    'assets/dashboard/image_02.jpg',
    'assets/dashboard/image_03.jpg',
    'assets/dashboard/image_04.jpg',
    'assets/dashboard/image_05.jpg',
    'assets/dashboard/image_06.jpg'
  ];



  activeIndex = 0;

  ngOnInit() {
    setInterval(() => {
      //debugger
      this.activeIndex =
        (this.activeIndex + 1) % this.carouselImages.length;
    }, 25000);
  }
}
