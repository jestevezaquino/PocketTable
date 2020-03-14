import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  navItem:any;
  contenedorP:any;
  AlturaNav:any;
  AlturaCon:any;

  constructor() { }

  ngOnInit(): void {
    this.AlturaCon = screen.height;
    this.navItem = document.getElementById("barra-navegacion");
    this.AlturaNav = this.navItem.clientHeight;
    this.contenedorP = document.getElementById("wallpaper-home");
  }

  ngAfterViewInit(){
    this.contenedorP.style.height = ""+(this.AlturaCon - this.AlturaNav*2)+"px";
  }
}