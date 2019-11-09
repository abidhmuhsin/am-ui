import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export interface Dialog {
   messages: string[];
   dialogType: string;
  }

@Injectable({
  providedIn: 'root'
})
export class AmDialogueService {


  private dialogResponseSubject: Subject<any>;
  private dialogBroadcastSubject: Subject<any>;

  constructor() {
    // User Response from a dialog can be subscribed from dialogResponseSubject
    this.dialogResponseSubject = new Subject<{}>();
    // Dialog Componenent will listen to dialogBroadcastSubject for new Dialogs
    this.dialogBroadcastSubject = new Subject<{}>();
  }

  /* Returns the observable for subscribing to any new dialogs
     so that component can show the dialog box */
  public getDialogBroadcast(): Observable<any> {
    return this.dialogBroadcastSubject.asObservable();
  }

  /* Emits the response back through dialogResponseSubject.
     Response supports string also for custom actions
     To be called from component on clicking action buttons like yes/no/close */
  public sendResponse(userResponse: boolean | string) {
    this.dialogResponseSubject.next(userResponse);
  }


  // Informs the Component to show a new dialog by emitting event
  public showDialog(message: string[], type: string): Observable<boolean> {
    const newDialog: Dialog =
    {
      messages: message,
      dialogType: type
    };

    // Notify the DialogComponent about new dialog.
    this.dialogBroadcastSubject.next(newDialog);

    // Clear previous subscriptions if any -- As only one dilaogBox should be open at a time
    this.dialogResponseSubject.unsubscribe();
    // Create and return the Subject's Observable for the initiator to listen for user-response
    this.dialogResponseSubject = new Subject<{}>();
    return this.dialogResponseSubject.asObservable();
  }


  // Helper method to create YES/NO dialog
  public confirmDialog(message: string | string[]): Observable<boolean> {
    return this.showDialog([].concat(message), 'confirm');
  }
  // Helper method to create OK dialog
  public okDialog(message: string | string[]): Observable<boolean> {
    return this.showDialog([].concat(message), 'ok');
  }

  // Helper method to create yes/no/cancel dialog
  public yesNoCancelDialog(message: string | string[]): Observable<boolean> {
    return this.showDialog([].concat(message), 'yesnocancel');
  }

}
