import { Component } from '@angular/core';
import { AmDialogueService, AmAlertsService } from 'am-ui';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html'
})
export class ConfirmDialogueComponent {

  constructor(private dialog: AmDialogueService,private alertsService: AmAlertsService) { }

  message =  'Click Yes to confirm. No to reject or Cancel to Cancel the dialog without any action';
  response;

  showConfirmationDialog() {
    this.dialog
      .confirmDialog('Do you wish to continue ?')
      .subscribe(userAction => {
        if (userAction) {
          this.response = 'yes clicked';
          this.alertsService.clearAll().info(this.response, 5);
        } else {
        this.response = 'no clicked';
        this.alertsService.clearAll().info(this.response, 5);
      }
      });
  }

  showYesNoCancelDialog() {
    this.dialog.yesNoCancelDialog(this.message).subscribe(userAction => {
     this.response = userAction;
     this.alertsService.clearAll().info('Subscrition returned: <b>' + this.response + '</b>', 5);
    });
  }

  showOkDialog() {
    const multilineMsg = ['This is first line.', 'This is second line.']
    this.dialog.okDialog(multilineMsg).subscribe(userAction => {
      this.response = userAction;
      this.alertsService.clearAll().info('Subscrition returned: <b>' + this.response + '</b>', 5);
    });
  }
}
