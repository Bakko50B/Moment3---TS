import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  randomPicturePath: string;

  constructor() {
    this.randomPicturePath = this.randomUrl();
  }

  randomUrl(): string {
    const pictures: string[] = ["images/Tobbe1.jpg", "images/Tobbe2.jpg", "images/Tobbe3.jpg", "images/Tobbe4.jpg"];
    const randomIndex: number = Math.floor(Math.random() * pictures.length);
    return pictures[randomIndex];
  }
}


