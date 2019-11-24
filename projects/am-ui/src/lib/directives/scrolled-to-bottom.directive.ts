import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[amScrolledToBottom]'
})
export class ScrolledToBottomDirective {


  constructor() { }
  @Output()
  public scrolledToBottom = new EventEmitter();

  @HostListener('scroll', ['$event'])
  onScroll() {
    const scrollHeight = event.srcElement.scrollHeight;
    const scrollPosition = event.srcElement.scrollTop;
    // console.log(event.srcElement.scrollHeight,event.srcElement.scrollTop)

    if (scrollHeight - scrollPosition === event.srcElement['offsetHeight']) {
      this.scrolledToBottom.emit(true);
    } else {
      console.log(scrollHeight, scrollPosition)
    }

  }

}
