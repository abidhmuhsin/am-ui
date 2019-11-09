import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'am-am-ui',
  template: `
      <p>
        am-ui library works!
      </p>
      <p>
        css is kept to minimum for easier customisation in forked projects!
      </p>
      `,
  styles: []
})
export class AmUiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
