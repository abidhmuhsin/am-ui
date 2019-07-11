import { NgModule } from '@angular/core';
import { AmUiComponent } from './am-ui.component';
import { AmTabbedpaneComponent, AmTabbedpanesComponent } from './components/am-tabbedpane/am-tabbedpane.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AmUiComponent, AmTabbedpaneComponent, AmTabbedpanesComponent],
  imports: [BrowserModule
  ],
  exports: [AmUiComponent,  AmTabbedpaneComponent, AmTabbedpanesComponent]
})
export class AmUiModule { }
