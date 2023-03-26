import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'notFound', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminModule) },
  { path: 'login', loadChildren: () => import('./pages/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'territorial', loadChildren: () => import('./pages/territorial/territorial.module').then(m => m.TerritorialModule) },
  { path: 'affective', loadChildren: () => import('./pages/affective/affective.module').then(m => m.AffectiveModule) },
  { path: 'alternate', loadChildren: () => import('./pages/alternate/alternate.module').then(m => m.AlternateModule) },
  { path: 'dd', loadChildren: () => import('./pages/dd/dd.module').then(m => m.DdModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
