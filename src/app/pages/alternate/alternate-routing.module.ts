import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlternateComponent } from './alternate.component';

const routes: Routes = [{ path: '', component: AlternateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlternateRoutingModule { }
