import { Component } from '@angular/core';
import { AmDialogueService, Dialog } from './am-dialogue.service'

@Component({
  selector: 'am-dialogue',
  templateUrl: './am-dialogue.component.html',
  styleUrls: ['./am-dialogue.component.css']
})
export class AmDialogueComponent {

  public isDialogHidden = true;
  public button1 = 'OK';
  public button2 = '';
  public button3 = '';
  public messageLines: string[] = ['Do you wish to confirm ?'];

  // @ViewChild('buttonA') mainButton:ElementRef;

  constructor(private dialogService: AmDialogueService) {
    this.dialogService.getDialogBroadcast()
      .subscribe((newDialog: Dialog) => {
        this.messageLines = newDialog.messages;
        switch (newDialog.dialogType) {
          case 'confirm':
            this.button1 = 'Yes';
            this.button2 = 'No';
            this.button3 = '';
            break;
          case 'ok':
            this.button1 = 'OK';
            this.button2 = '';
            this.button3 = '';
            break;
          case 'yesnocancel':
            this.button1 = 'Yes'
            this.button2 = 'No';
            this.button3 = 'Cancel';
            break;
        }
        // Show the dialog once appropriate buttons are set
        this.show();
      });
  }

  private show() {
    this.isDialogHidden = false;
  }

  private hide() {
    this.isDialogHidden = true;
  }

  public confirm() {
    this.hide(); // !important hide should be done first
    this.dialogService.sendResponse(true);
  }

  public decline() {
    this.hide(); // !important hide should be done first
    this.dialogService.sendResponse(false);
  }

  public cancel() {
    this.hide(); // !important hide should be done first
    this.dialogService.sendResponse('cancel');
  }

}