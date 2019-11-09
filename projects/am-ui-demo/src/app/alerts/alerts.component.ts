import { Component } from '@angular/core';
import { AmAlertsService } from 'am-ui';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html'
})
export class AlertsComponent {

  message =  'Custom message';

  constructor(public alertService: AmAlertsService) { }


  newAlert() {
      this.alertService.info('This is an info message!')
      .error('This is an error message!')
      .success(['This is a success message', 'A message can be multiline too','Simply pass an string array of messages']);
  }

}
