import { Component } from '@angular/core';
import { AmAlertsService } from 'am-ui';

@Component({
  selector: 'app-mixed-demos',
  templateUrl: './mixed-demos.component.html',
  styleUrls: ['./mixed-demos.component.css']
})
export class MixedDemosComponent {

  title = 'am-ui-demo';
  selectedDate;

  constructor(public alertService: AmAlertsService){}

  onTabChange(tabTitle) {
    this.alertService.info(['Tab changed to: ' + tabTitle , 'Changed tabId captured from `tabChanged` EventEmitter'] , 5);
  }

}
