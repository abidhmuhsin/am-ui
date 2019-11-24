import { Injectable } from '@angular/core';

export interface AlertMessage {
  alertId: number;
  type: string;
  multiLineMessage: string[];
  timeOut: number; // -1 for infinite/ manual close only
  isClosed: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class AmAlertsService {

  /*
  private alertsSubject: Subject<any>;
  Use a subject and emit each new alerts into component,
  then maintain alertsArray inside component so that
   no one from outside can modify already created alerts.
  */
  private alertCounter: number;
  private allAlerts: AlertMessage[];
  private maxAlertsInBuffer: number;
  private defaultTimeOut: number; // in seconds

  constructor() {
    //  this.alertsSubject = new BehaviorSubject<{}>(-1);
    this.alertCounter = 0;
    this.defaultTimeOut = 15;  // 15 seconds
    this.maxAlertsInBuffer = 10;
    this.allAlerts = [];
  }

  private _createAlert(alertType: string, alertMessageLines: string[], timeToKeepOpen: number): number {
    const newAlert: AlertMessage = {
      alertId: this.alertCounter++,
      type: alertType,
      multiLineMessage: alertMessageLines,
      timeOut: timeToKeepOpen,
      isClosed: false
    };

    // Clean up closed messages
    if (this.allAlerts.length > this.maxAlertsInBuffer) {
      // destroy all closed alerts from memory.
      this._destroyClosedAlerts();
      // if more than allowed open messages in buffer, push the oldest one.
      if (this.allAlerts.length > this.maxAlertsInBuffer) {
        this.allAlerts.shift();  // shift() method removes the first item of an array.i.e oldest alert;
      }
    }

    // set the alert autoclose timer
    setTimeout(() => {
      newAlert.isClosed = true;
    }, timeToKeepOpen * 1000);

    this.allAlerts.push(newAlert);
    // this.alertsSubject.next(newAlert);

    return newAlert.alertId;
  }

  /* Below helper method takes in (string[] | string) ---> converts into string[] */
  private _getStringArray(alertMessageLines: string[] | string): string[] {
    let messages = [];
    (typeof alertMessageLines !== 'string') ? messages = alertMessageLines : messages = [alertMessageLines];
    return messages;
  }

  private _destroyAlert(alertId: number) {
    this.allAlerts = this.allAlerts.filter(alert => alert.alertId === alertId ? false : true);
  }
  private _destroyClosedAlerts() {
    this.allAlerts = this.allAlerts.filter(alert => alert.isClosed ? false : true);
  }

  public getAllAlerts() {
    return this.allAlerts;
  }

  // method to destroy all alerts at once;
  public clearAll() {
    this.allAlerts = [];
    return this;
  }

  public info(alertMessageLines: string[] | string, timeToKeepOpen?: number): AmAlertsService {
    this._createAlert(
      'info',
      this._getStringArray(alertMessageLines),
      timeToKeepOpen ? timeToKeepOpen : this.defaultTimeOut);
    // return this for creating chained alerts;
    return this;
  }


  public success(alertMessageLines: string[] | string, timeToKeepOpen?: number): AmAlertsService {
    this._createAlert(
      'success',
      this._getStringArray(alertMessageLines),
      timeToKeepOpen ? timeToKeepOpen : this.defaultTimeOut);
    // return this for creating chained alerts;
    return this;
  }


  public error(alertMessageLines: string[] | string, timeToKeepOpen?: number): AmAlertsService {
    this._createAlert(
      'error',
      this._getStringArray(alertMessageLines),
      timeToKeepOpen ? timeToKeepOpen : this.defaultTimeOut);
    // return this for creating chained alerts;
    return this;
  }

}
