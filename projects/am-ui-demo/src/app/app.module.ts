import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AmUiModule } from 'am-ui';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AmUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
