import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdRoutingModule } from './dd-routing.module';
import { DdComponent } from './dd.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    DdComponent
  ],
  imports: [
    CommonModule,
    DdRoutingModule,
    NgxChartsModule
  ]
})
export class DdModule { }
