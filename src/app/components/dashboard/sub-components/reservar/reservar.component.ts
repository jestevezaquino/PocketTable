import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/services/general.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  restaurantes:any = []
  buttonState:any = []

  constructor(private service:GeneralService, private userAuth:AngularFireAuth ,private rltDatabase:AngularFireDatabase) { }

  ngOnInit(): void {}

  ReservarRestaurante(restID, restObject, index){
    this.rltDatabase.database.ref("reservations/"+this.userAuth.auth.currentUser.uid+"/"+restID).set(restObject);
    this.buttonState[index] = 1;
    alert("Ha reservado el restaurante correctamente.");
  }

  obtenerNY(){
    this.restaurantes = [];
    this.service.restaurantsNY().subscribe((data:any)=>{
      this.restaurantes = data.restaurants;
    })
  }
  obtenerBT(){
    this.restaurantes = [];
    this.service.restaurantsBT().subscribe((data:any)=>{
      this.restaurantes = data.restaurants;
    })
  }
  obtenerCG(){
    this.restaurantes = [];
    this.service.restaurantsCG().subscribe((data:any)=>{
      this.restaurantes = data.restaurants;
    })
  }
  obtenerKS(){
    this.restaurantes = [];
    this.service.restaurantsKS().subscribe((data:any)=>{
      this.restaurantes = data.restaurants;
    })
  }
  obtenerMM(){
    this.restaurantes = [];
    this.service.restaurantsMM().subscribe((data:any)=>{
      this.restaurantes = data.restaurants;
    })
  }
  obtenerTP(){
    this.restaurantes = [];
    this.service.restaurantsTP().subscribe((data:any)=>{
      this.restaurantes = data.restaurants;
    })
  }
}
