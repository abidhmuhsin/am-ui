import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'am-img-gallery',
  templateUrl: './am-img-gallery.component.html',
  styleUrls: ['./am-img-gallery.component.css']
})
export class AmImgGalleryComponent implements OnInit {

  @Input()
  images: [any];
  @Output()
  imageClicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onImageClicked(index: number) {
    this.imageClicked.emit(this.images[index]);
  }

}
