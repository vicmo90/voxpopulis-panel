import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AffectiveRoutingModule } from './affective-routing.module';
import { AffectiveComponent } from './affective.component';


@NgModule({
  declarations: [
    AffectiveComponent
  ],
  imports: [
    CommonModule,
    AffectiveRoutingModule
  ]
})
export class AffectiveModule { }
