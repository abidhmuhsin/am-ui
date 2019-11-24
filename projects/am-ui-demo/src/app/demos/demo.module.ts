import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AmUiModule } from 'am-ui';
import { CommonModule } from '@angular/common';

import { ImgGalleryDemoComponent } from './img-gallery-demo/img-gallery-demo.component';
import { MixedDemosComponent } from './mixed-demos/mixed-demos.component';
import { TabbedPaneDemoComponent } from './tabbed-pane-demo/tabbed-pane-demo.component';
import { DemoRoutingModule } from './demo-routing.module';
import { AccordionDemoComponent } from './accordion-demo/accordion-demo.component';
import { ConfirmDialogDemoComponent } from './confirm-dialog-demo/confirm-dialog-demo.component';
import { AlertsDemoComponent } from './alerts-demo/alerts-demo.component';
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';
import { SvgDonutDemoComponent } from './svg-donut-demo/svg-donut-demo.component';
import { DropdownDemoComponent } from './dropdown-demo/dropdown-demo.component';
import { ModalDemoComponent } from './modal-demo/modal-demo.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { TypeaheadDemoComponent } from './typeahead-demo/typeahead-demo.component';

@NgModule({

    imports: [
        CommonModule,
        FormsModule,
        DemoRoutingModule,
        AmUiModule
    ],
    declarations: [
        MixedDemosComponent,
        TabbedPaneDemoComponent,
        ImgGalleryDemoComponent,
        TabbedPaneDemoComponent,
        AccordionDemoComponent,
        AlertsDemoComponent,
        ConfirmDialogDemoComponent,
        CalendarDemoComponent,
        SvgDonutDemoComponent,
        DropdownDemoComponent,
        ModalDemoComponent,
        SidePanelComponent,
        TypeaheadDemoComponent
    ],
    providers: []
})
export class DemoModule { }