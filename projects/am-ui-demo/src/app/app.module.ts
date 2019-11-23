import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AmUiModule } from 'am-ui';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './layout/home/home.component';
import { LeftPanelComponent } from './layout/left-panel/left-panel.component';
import { ReadmeComponent } from './readme/readme.component';

@NgModule({
   imports: [
      BrowserModule,
      AppRoutingModule,
      AmUiModule,
      // DemoModule,
   ],
   declarations: [
      AppComponent,
      HomeComponent,
      LeftPanelComponent,
      ReadmeComponent
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
