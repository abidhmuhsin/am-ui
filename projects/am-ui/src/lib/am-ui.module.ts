import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AmUiComponent } from './am-ui.component';
import { AmTabbedpaneComponent, AmTabbedpanesComponent } from './components/am-tabbedpane/am-tabbedpane.component';
import { BrowserModule } from '@angular/platform-browser';
import { AmAccordionComponent } from './components/am-accordion/am-accordion.component';
import { AmDialogueComponent } from './components/am-dialogue/am-dialogue.component';
import { AmDialogueService } from './components/am-dialogue/am-dialogue.service';

@NgModule({
  declarations: [AmUiComponent,
    AmTabbedpaneComponent,
    AmTabbedpanesComponent,
    AmAccordionComponent,
    AmDialogueComponent
  ],
  imports: [BrowserModule , BrowserAnimationsModule
  ],
  exports: [AmUiComponent,
    AmTabbedpaneComponent,
    AmTabbedpanesComponent,
    AmAccordionComponent,
    AmDialogueComponent
  ],
 // providers : [AmDialogueService]
 // AmDialogueService provided using annotation and mention in public-api.ts
})
export class AmUiModule { }
