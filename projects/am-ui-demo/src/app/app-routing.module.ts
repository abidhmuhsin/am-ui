import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { HomeComponent } from "./layout/home/home.component";
import { ReadmeComponent } from "./readme/readme.component";


@NgModule({
    imports: [
      RouterModule.forRoot([
        // { path: '', component: AppComponent},
        { path: '', redirectTo: '/readme', pathMatch: 'full' },
        { path: '', component: HomeComponent,
           children: [
            { path: 'readme', component: ReadmeComponent},
            { path: 'showcase',    loadChildren: './demos/demo.module#DemoModule' },
            // { path: 'showcase',    loadChildren: () => DemoModule },
            // { path: 'dummy',    loadChildren: './dummy/dummy.module#DummyModule' },
             ]
           }
      ])
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }