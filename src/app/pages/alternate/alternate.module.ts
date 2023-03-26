import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlternateRoutingModule } from './alternate-routing.module';
import { AlternateComponent } from './alternate.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AlternateComponent
  ],
  imports: [
    CommonModule,
    AlternateRoutingModule,
    NgxChartsModule
  ]
})
export class AlternateModule { }
