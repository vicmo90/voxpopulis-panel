import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerritorialComponent } from './territorial.component';

const routes: Routes = [{ path: '', component: TerritorialComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerritorialRoutingModule { }
