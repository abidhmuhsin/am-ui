import { Component } from '@angular/core';

@Component({
  selector: 'app-img-gallery-demo',
  templateUrl: './img-gallery-demo.component.html',
  styleUrls: ['./img-gallery-demo.component.css']
})
export class ImgGalleryDemoComponent {

  constructor() { }

  showPreview: boolean;
  selectedImage = {};
  images = [{
    index: 0,
    url: 'assets/images/photo-1.jpg',
    alt: 'This is first image'
  },
  {
    index: 1,
    url: 'assets/images/photo-2.jpg',
    alt: 'This is second image'
  },
  {
    index: 2,
    url: 'assets/images/photo-3.jpg',
    alt: 'This is third image'
  },
  {
    index: 3,
    url: 'assets/images/photo-4.jpg',
    alt: 'This is image 5'
  },
  {
    index: 4,
    url: 'assets/images/photo-5.jpg',
    alt: 'This is image 5'
  },
  {
    index: 5,
    url: 'assets/images/photo-6.jpg',
    alt: 'This is image 6'
  },
  {
    index: 6,
    url: 'assets/images/photo-7.jpg',
    alt: 'This is image 7'
  },
  {
    index: 7,
    url: 'assets/images/photo-8.jpg',
    alt: 'This is image 8'
  },
  {
    index: 8,
    url: 'assets/images/photo-10.jpg',
    alt: 'Broken image 9 - Demonstrating alt-text'
  },  {
    index: 9,
    url: 'assets/images/photo-9.jpg',
    alt: 'This is image 10'
  },
  ];

  openImgPreview($ev) {
    this.showPreview = true;
    this.selectedImage = $ev;
  }

}
