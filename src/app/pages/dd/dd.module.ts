import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DdRoutingModule } from './dd-routing.module';
import { DdComponent } from './dd.component';


@NgModule({
  declarations: [
    DdComponent
  ],
  imports: [
    CommonModule,
    DdRoutingModule
  ]
})
export class DdModule { }
