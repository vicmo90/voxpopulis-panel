import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DdComponent } from './dd.component';

const routes: Routes = [{ path: '', component: DdComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DdRoutingModule { }
