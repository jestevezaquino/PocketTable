import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoRoutingModule } from './acceso-routing.module';
import { AccesoComponent } from './acceso.component';
import { LoginComponent } from './sub-components/login/login.component';
import { RegistroComponent } from './sub-components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AccesoComponent, LoginComponent, RegistroComponent],
  imports: [
    CommonModule,
    AccesoRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ]
})
export class AccesoModule { }