import { Component } from '@angular/core';
import { AmDialogueService } from 'am-ui';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html'
})
export class ConfirmDialogueComponent {

  constructor(private dialog: AmDialogueService) { }

  message =  'Click Yes to confirm. No to reject or Cancel to Cancel the dialog without any action';
  response;

  showConfirmationDialog() {
    this.dialog
      .confirmDialog('Do you wish to continue ?')
      .subscribe(userAction => {
        if (userAction) {
          this.response = 'yes clicked';
        } else {  this.response = 'no clicked'; }
      });
  }

  showYesNoCancelDialog() {
    this.dialog.yesNoCancelDialog(this.message).subscribe(userAction => {
     this.response = userAction;
    });
  }

  showOkDialog() {
    const multilineMsg = ['This is first line.', 'This is second line.']
    this.dialog.okDialog(multilineMsg).subscribe(userAction => {
      this.response = userAction;
    });
  }
}
