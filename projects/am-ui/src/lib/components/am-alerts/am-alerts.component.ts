import { Component } from '@angular/core';
import { AmAlertsService } from './am-alerts.service';
import { AlertMessage } from './am-alerts.service';

@Component({
  selector: 'am-alerts',
  templateUrl: './am-alerts.component.html',
  styleUrls: ['./am-alerts.component.css']
})
export class AmAlertsComponent {

    constructor(public alertsService: AmAlertsService){
    }

    close(alert: AlertMessage) {
        alert.isClosed = true;
    }
}