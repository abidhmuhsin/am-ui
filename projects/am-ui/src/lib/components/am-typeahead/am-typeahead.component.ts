import { Component, OnInit, Input , Output, EventEmitter } from '@angular/core';
import { DropDownItem } from '../../modals/modals';

@Component({
  selector: 'am-typeahead',
  templateUrl: './am-typeahead.component.html',
  styleUrls: ['./am-typeahead.component.css']
})
export class AmTypeaheadComponent implements OnInit {

 
  @Input()
  public itemList: [DropDownItem];
  @Output()
  public selected: EventEmitter<DropDownItem> = new EventEmitter();
  @Input()
  public selectedKey: any;
  public selectedValue: any;
  public filteredItems;

  constructor() {
  }

  ngOnInit() {
    this.filteredItems = this.itemList;
  }

  onSelected($ev: DropDownItem) {
    this.selected.emit($ev);
    this.selectedKey = $ev.key;
    this.selectedValue = $ev.value;
  }

  applyFilter(query: string){
    this.filteredItems = this.itemList.filter(item => {
      return item.value.includes(query.toLowerCase()) 
    })
    console.log(query)
    //return this.filteredItems;  
  }
}
