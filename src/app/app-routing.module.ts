import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { DetallesGuardService } from './services/detalles-guard.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home'},
  { path: 'Home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'Acceso', loadChildren: () => import('./components/acceso/acceso.module').then(m => m.AccesoModule) },
  { path: 'Dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService] },
  { path: 'Detalles', loadChildren: () => import('./components/detalles/detalles.module').then(m => m.DetallesModule), canActivate: [DetallesGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
