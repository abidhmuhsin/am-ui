import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AmUiComponent } from './am-ui.component';
import { AmTabbedpaneComponent, AmTabbedpanesComponent } from './components/am-tabbedpane/am-tabbedpane.component';
import { BrowserModule } from '@angular/platform-browser';
import { AmAccordionComponent } from './components/am-accordion/am-accordion.component';

@NgModule({
  declarations: [AmUiComponent,
    AmTabbedpaneComponent,
    AmTabbedpanesComponent,
    AmAccordionComponent
  ],
  imports: [BrowserModule , BrowserAnimationsModule
  ],
  exports: [AmUiComponent,
    AmTabbedpaneComponent,
    AmTabbedpanesComponent,
    AmAccordionComponent
  ]
})
export class AmUiModule { }
