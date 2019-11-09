import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmUiModule } from 'am-ui';
import { ConfirmDialogueComponent } from './confirm-dialogue/confirm-dialogue.component';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogueComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AmUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
