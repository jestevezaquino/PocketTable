import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'Home'},
  { path: 'Home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'Acceso', loadChildren: () => import('./components/acceso/acceso.module').then(m => m.AccesoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
