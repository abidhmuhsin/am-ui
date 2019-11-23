import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';

interface DropDownItem {
  key: string;
  value: string;
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
  public selectedKey: number;

  constructor() {
  }

  ngOnInit() {
  }

  onSelected($ev) {
    this.selected.emit($ev);
    this.selectedKey = $ev.key;
  }

}
