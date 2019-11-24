import { Component, OnInit } from '@angular/core';
import { AlertMessage, DropDownItem, TestModal } from 'am-ui';

@Component({
  selector: 'app-typeahead-demo',
  templateUrl: './typeahead-demo.component.html',
  styleUrls: ['./typeahead-demo.component.css']
})
export class TypeaheadDemoComponent implements OnInit {

  
  item;

  constructor() { }

  ngOnInit() {

    this.item = {bla:'asap'};
  }


}
