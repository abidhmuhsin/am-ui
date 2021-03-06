import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { DropDownItem } from '../../modals/modals';

export interface DropDownItem {
  key: string | number;
  value: string | number;
}

@Component({
  selector: 'am-dropdown',
  templateUrl: './am-dropdown.component.html',
  styleUrls: ['./am-dropdown.component.css']
})
export class AmDropdownComponent implements OnInit {

  @Input()
  public itemList: [DropDownItem];
  @Output()
  public selected: EventEmitter<DropDownItem> = new EventEmitter();
  @Input()
  public selectedKey: any;
  public selectedValue: any;

  constructor() {
  }

  ngOnInit() {
  }

  onSelected($ev: DropDownItem) {
    this.selected.emit($ev);
    this.selectedKey = $ev.key;
    this.selectedValue = $ev.value;
  }

}
