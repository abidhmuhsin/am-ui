import { Component } from '@angular/core';
import { AmAlertsService } from 'am-ui';

@Component({
  selector: 'app-tabbed-pane-demo',
  templateUrl: './tabbed-pane-demo.component.html',
  styleUrls: ['./tabbed-pane-demo.component.css']
})
export class TabbedPaneDemoComponent{

  constructor(public alertsService: AmAlertsService){}

  onTabChange(tabTitle) {
    this.alertsService.info(['Tab changed to: ' + tabTitle , 'Changed tabId captured from `tabChanged` EventEmitter'] , 5);
  }
  
  ngOnDestroy() {
    this.alertsService.clearAll();
  }


}
