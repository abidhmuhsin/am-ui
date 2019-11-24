import { NgModule, ModuleWithProviders } from '@angular/core';
import { AmUiComponent } from './am-ui.component';
import { AmTabbedpaneComponent, AmTabbedpanesComponent } from './components/am-tabbedpane/am-tabbedpane.component';
import { AmAccordionComponent } from './components/am-accordion/am-accordion.component';
import { AmDialogueComponent } from './components/am-dialogue/am-dialogue.component';
import { AmAlertsComponent } from './components/am-alerts/am-alerts.component';
import { AmDatepickerComponent } from './components/am-datepicker/am-datepicker.component';
import { AmPartialDonutComponent } from './components/am-partial-donut/am-partial-donut.component';
import { AmImgGalleryComponent } from './components/am-img-gallery/am-img-gallery.component';
import { AmImgPreviewComponent } from './components/am-img-preview/am-img-preview.component';
import { CommonModule } from '@angular/common';
import { AmDropdownComponent } from './components/am-dropdown/am-dropdown.component';
import { AmTypeaheadComponent } from './components/am-typeahead/am-typeahead.component';
import { AmGuagemeterComponent } from './components/am-guagemeter/am-guagemeter.component';

@NgModule({
  declarations: [AmUiComponent,
    AmTabbedpaneComponent,
    AmTabbedpanesComponent,
    AmAccordionComponent,
    AmDialogueComponent,
    AmAlertsComponent,
    AmDatepickerComponent,
    AmPartialDonutComponent,
    AmImgGalleryComponent,
    AmImgPreviewComponent,
    AmDropdownComponent,
    AmTypeaheadComponent,
    AmGuagemeterComponent
  ],
  exports: [AmUiComponent,
    AmTabbedpaneComponent,
    AmTabbedpanesComponent,
    AmAccordionComponent,
    AmDialogueComponent,
    AmAlertsComponent,
    AmDatepickerComponent,
    AmPartialDonutComponent,
    AmImgGalleryComponent,
    AmImgPreviewComponent,
    AmDropdownComponent,
    AmTypeaheadComponent,
    AmGuagemeterComponent

  ],
  imports: [CommonModule],
  /* imports: [BrowserModule , BrowserAnimationsModule]
  --> Works only if library is used in Master Module.. Throws error when used in Secondary Modules during loading
  imports: [BrowserModule , BrowserAnimationsModule]  --> getting error
  Error: BrowserModule has already been loaded. If you need access to common directives
   such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.*/

  // providers : [AmDialogueService]
  // AmDialogueService provided using annotation and mention in public-api.ts
})
export class AmUiModule { }