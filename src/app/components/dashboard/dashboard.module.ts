import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ReservacionesComponent } from './sub-components/reservaciones/reservaciones.component';
import { ReservarComponent } from './sub-components/reservar/reservar.component';


@NgModule({
  declarations: [DashboardComponent, ReservacionesComponent, ReservarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
