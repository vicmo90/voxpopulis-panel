import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlternateRoutingModule } from './alternate-routing.module';
import { AlternateComponent } from './alternate.component';


@NgModule({
  declarations: [
    AlternateComponent
  ],
  imports: [
    CommonModule,
    AlternateRoutingModule
  ]
})
export class AlternateModule { }
