import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  contenedorP:any;
  contenedorN:any;
  contenedorS:any;

  muestras:any = [];

  constructor(private router:Router,private serv:GeneralService) {}

  ngOnInit() {

    this.serv.muestraOT().subscribe((data:any)=>{
      this.muestras.push(data.restaurants[4]);
    });

    this.serv.muestraOT2().subscribe((data:any)=>{
      this.muestras.push(data.restaurants[2]);
    });

    this.serv.muestraOT3().subscribe((data:any)=>{
      this.muestras.push(data.restaurants[0]);
    });

    this.contenedorP = document.getElementById("home");
    this.contenedorN = document.getElementById("nosotros");
    this.contenedorS = document.getElementById("servicios");
  }

  ngAfterViewInit(){
    this.contenedorP.style.height = "100vh";
    this.contenedorN.style.height = "100vh";
    this.contenedorS.style.height = "100vh";
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