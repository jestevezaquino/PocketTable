import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  itemRef:any;
  NombreUsuario:string;
  control:boolean;

  constructor(private userAuth:AngularFireAuth, private db:AngularFireDatabase, private router:Router) { }

  ngOnInit(): void {
    this.control = false;
    this.itemRef = this.db.object("PocketTable/users/"+this.userAuth.auth.currentUser.uid);
    this.itemRef.snapshotChanges().subscribe(data=>{
      let ObjUser = data.payload.val();
      this.NombreUsuario = ObjUser.Username;
    });
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