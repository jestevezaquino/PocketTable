import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  contenedorP:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.contenedorP = document.getElementById("contenedor");
  }

  ngAfterViewInit(){
    this.contenedorP.style.height = "90vh";
  }

  navigateToHome(){
    this.router.navigate(['/Home'])
  }
}
