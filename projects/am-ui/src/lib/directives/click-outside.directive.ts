import { Directive, Output, HostListener, ElementRef, EventEmitter } from '@angular/core';

@Directive({
  selector: '[amClickOutside]'
})
export class ClickOutsideDirective {


  constructor(private _elementRef: ElementRef) {
  }

  @Output()
  public clickOutside = new EventEmitter();

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    // console.log(this._elementRef.nativeElement,targetElement, clickedInside)
    if (!clickedInside) {
      //  console.log('outside click',this._elementRef.nativeElement)
      this.clickOutside.emit(null);
    } else {
      // console.log('inside click', this._elementRef.nativeElement)
    }
  }

}
