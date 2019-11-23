import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'am-img-preview',
  templateUrl: './am-img-preview.component.html',
  styleUrls: ['./am-img-preview.component.css']
})
export class AmImgPreviewComponent implements OnInit {
  @Input()
  images: [any]; // optional - will use only selectedImage
  @Input()
  selectedImage: any;
  @Output()
  closed: EventEmitter<any> = new EventEmitter();
  @Input()
  selectedImgUrl;
  currentIndex = 0;
  showNavButtons = false;
  constructor() { }

  ngOnInit() {
    if (this.selectedImgUrl) {
      // direct display - single image mode
      this.showNavButtons = false;
      return;
    } else {
      this.showNavButtons = true;
      this.showImageAtIndex(0);
    }
  }

  prevImage() {
    const newIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1;
    this.showImageAtIndex(newIndex);
  }

  nextImage() {
    const newIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1;
    this.showImageAtIndex(newIndex);
  }

  closePreview() {
    this.closed.emit();
  }

  showImageAtIndex(index: number) {
    this.currentIndex = index;
    this.selectedImgUrl = this.images[index].url;
  }

}
