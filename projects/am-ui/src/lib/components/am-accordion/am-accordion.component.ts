import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'am-accordion',
  templateUrl: './am-accordion.component.html',
  styleUrls: ['./am-accordion.component.css']
})
export class AmAccordionComponent {

  @Input() expanded: boolean;
  @Input() title: string;
  @Output() open:  EventEmitter<boolean> = new EventEmitter();

  public toggleTab() {
    if (this.expanded) {
      this.open.emit(false);
      this.expanded = false;
    } else {
      this.open.emit(true);
      this.expanded = true;
    }
  }

}
