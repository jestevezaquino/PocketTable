import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/services/general.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  userName:any
  rest:any;

  constructor(private router:Router, private service:GeneralService, private userAuth:AngularFireAuth , private db:AngularFireDatabase) { }

  ngOnInit(): void {
    this.userName = this.userAuth.auth.currentUser.displayName;
    this.rest = this.service.getRestaurant();
  }

  Eliminar(){
    this.db.database.ref("PocketTable/reservations/"+this.userAuth.auth.currentUser.uid+"/"+this.rest.id).remove();
    alert("Se ha removido este restaurante de tus reservaciones!");
    this.Regresar();
  }

  Regresar(){
    this.router.navigate(["/Dashboard"])
  }
}
