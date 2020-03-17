import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  navItem:any;
  contenedorP:any;
  AlturaNav:any;
  AlturaCon:any

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.AlturaCon = screen.height;
    this.navItem = document.getElementById("barra-navegacion");
    this.AlturaNav = this.navItem.clientHeight;
    this.contenedorP = document.getElementById("contenedor");
  }

  ngAfterViewInit(){
    this.contenedorP.style.height = ""+(this.AlturaCon - this.AlturaNav*2)+"px";
  }

  navigateToHome(){
    this.router.navigate(['/Home'])
  }
}
