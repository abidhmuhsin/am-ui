import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmAlertsService } from 'am-ui';

@Component({
  selector: 'app-alerts-demo',
  templateUrl: './alerts-demo.component.html',
  styleUrls: ['./alerts-demo.component.css']
})
export class AlertsDemoComponent implements OnInit, OnDestroy{

 
  message = 'Custom message';

  constructor(public alertService: AmAlertsService) { }

  ngOnInit() {
    this.newAlert();
  }
  ngOnDestroy() {
    this.alertService.clearAll();
  }

  newAlert() {
    this.alertService.info('This is an info message!')
      .error('This is an error message and will be valid for 5 seconds only!',5)
      .success(['This is a success message',
        'A message can be multiline too',
        'Simply pass an string array of messages',
        ' By default an alert gets destroyed in 30seconds']);
  }

  clearAll() {
    this.alertService.clearAll().info('New Alert After clearing all existing');
  }

}
