import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { ImgGalleryDemoComponent } from "./img-gallery-demo/img-gallery-demo.component";
import { MixedDemosComponent } from "./mixed-demos/mixed-demos.component";
import { TabbedPaneDemoComponent } from "./tabbed-pane-demo/tabbed-pane-demo.component";
import { AccordionDemoComponent } from "./accordion-demo/accordion-demo.component";
import { AlertsDemoComponent } from './alerts-demo/alerts-demo.component';
import { ConfirmDialogDemoComponent } from './confirm-dialog-demo/confirm-dialog-demo.component';
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';
import { SvgDonutDemoComponent } from "./svg-donut-demo/svg-donut-demo.component";
import { DropdownDemoComponent } from "./dropdown-demo/dropdown-demo.component";
import { ModalDemoComponent } from "./modal-demo/modal-demo.component";
import { SidePanelComponent } from "./side-panel/side-panel.component";
import { TypeaheadDemoComponent } from './typeahead-demo/typeahead-demo.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: 'all', pathMatch: 'full' },
            { path: 'all', component: MixedDemosComponent },

            { path: 'img-gallery', component: ImgGalleryDemoComponent },
            { path: 'tabbed-pane', component: TabbedPaneDemoComponent },
            { path: 'accordion', component: AccordionDemoComponent },
            { path: 'alerts', component: AlertsDemoComponent },
            { path: 'confirm-dialog', component: ConfirmDialogDemoComponent },
            { path: 'calendar', component: CalendarDemoComponent },
            { path: 'svg-donut', component: SvgDonutDemoComponent },

            { path: 'dropdown', component: DropdownDemoComponent },
            { path: 'typeahead', component: TypeaheadDemoComponent },
            { path: 'modal', component: ModalDemoComponent },
            { path: 'side-panel', component: SidePanelComponent }

        ])
    ],
    exports: [RouterModule]
})
export class DemoRoutingModule { }