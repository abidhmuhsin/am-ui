import { Component } from '@angular/core';
import { AmAlertsService } from 'am-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'am-ui-demo';
  selectedDate;

  constructor(public alertService: AmAlertsService){}

  onTabChange(tabTitle) {
    this.alertService.info(['Tab changed to: ' + tabTitle , 'Changed tabId captured from `tabChanged` EventEmitter'] , 5);
  }
  
}
