import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  navItem:any;
  contenedorP:any;
  contenedorN:any;
  contenedorS:any;
  AlturaNav:any;
  AlturaCon:any;

  muestras:any = [];

  constructor(private router:Router,private serv:GeneralService) {}

  ngOnInit() {

    this.serv.muestraOT().subscribe((data:any)=>{
      this.muestras.push(data.restaurants[1]);
      this.muestras.push(data.restaurants[2]);
      this.muestras.push(data.restaurants[3]);
    });

    this.AlturaCon = screen.height;
    this.navItem = document.getElementById("barra-navegacion");
    this.AlturaNav = this.navItem.clientHeight;
    this.contenedorP = document.getElementById("home");
    this.contenedorN = document.getElementById("nosotros");
    this.contenedorS = document.getElementById("servicios");
  }

  ngAfterViewInit(){
    this.contenedorP.style.height = ""+(this.AlturaCon - this.AlturaNav)+"px";
    this.contenedorN.style.height = ""+(this.AlturaCon - this.AlturaNav*2)+"px";
    this.contenedorS.style.height = ""+(this.AlturaCon - this.AlturaNav)+"px";
  }

  navigateToHome(){
    var element = document.getElementById("home");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth', 
      inline: 'start'
    });
  }

  navigateToNosotros(){
    var element = document.getElementById("nosotros");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth', 
      inline: 'start'
    });
  }

  navigateToServicios(){
    var element = document.getElementById("servicios");
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth', 
      inline: 'start'
    });
  }

  navigateToAcceso(){
    this.router.navigate(["/Acceso"]);
  }
}