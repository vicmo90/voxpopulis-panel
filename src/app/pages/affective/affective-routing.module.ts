import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AffectiveComponent } from './affective.component';

const routes: Routes = [{ path: '', component: AffectiveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AffectiveRoutingModule { }
