import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffectiveRoutingModule } from './affective-routing.module';
import { AffectiveComponent } from './affective.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@NgModule({
  declarations: [
    AffectiveComponent
  ],
  imports: [
    CommonModule,
    AffectiveRoutingModule,
    NgxChartsModule
  ]
})
export class AffectiveModule { }
