import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-demo',
  templateUrl: './dropdown-demo.component.html',
  styleUrls: ['./dropdown-demo.component.css']
})
export class DropdownDemoComponent implements OnInit {

  public usage = `<am-dropdown [itemList]="items" (selected)="onSelection($event)" [selectedKey]="'i5'"> Item List</am-dropdown>`;
  public selectedItem;
  public items: any[] = [{ key: 'i1', value: 'item1' },
                         { key: 'i2', value: 'item2' },
                         { key: 'i3', value: 'item3' },
                         { key: 'i4', value: 'item4' },
                         { key: 'i5', value: 'item5' },
                         { key: 'i6', value: 'item6' },
                         { key: 'i7', value: 'item7' },
                         { key: 'i8', value: 'item8' }
                        ];
  constructor() { }

  ngOnInit() {
  }

  onSelection(dropDownItem: {}) {
      this.selectedItem = JSON.stringify(dropDownItem);
  }

}
