import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { TerritorialRoutingModule } from './territorial-routing.module';
import { TerritorialComponent } from './territorial.component';


@NgModule({
  declarations: [
    TerritorialComponent
  ],
  imports: [
    FormsModule,
    NgxChartsModule,
    TerritorialRoutingModule
  ]
})
export class TerritorialModule { }
