import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmAlertsService } from 'am-ui';

@Component({
  selector: 'app-calendar-demo',
  templateUrl: './calendar-demo.component.html',
  styleUrls: ['./calendar-demo.component.css']
})
export class CalendarDemoComponent implements OnInit,OnDestroy {

  constructor(public alertsService:AmAlertsService) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.alertsService.clearAll();
  }

}
