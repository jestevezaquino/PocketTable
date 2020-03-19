import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userName:any;
  contenedorP:any;
  control:boolean;

  constructor(private userAuth:AngularFireAuth, private router:Router) { }

  ngOnInit(): void {
    this.userName = this.userAuth.auth.currentUser.displayName;
    this.control = false;
  }
  
  AbrirReservaciones(){
    this.control = false;
  }

  AbrirReservar(){
    this.control = true;
  }

  CerrarSesion(){
    this.userAuth.auth.signOut();
    this.router.navigate(['/Home']); 
  }
}