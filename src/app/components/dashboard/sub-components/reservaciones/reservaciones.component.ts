import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css']
})
export class ReservacionesComponent implements OnInit {

  itemRef:any;
  reservaciones = [];

  constructor(private service:GeneralService, private router:Router, private rltDb:AngularFireDatabase, private userAuth:AngularFireAuth) { }

  ngOnInit(): void {
    this.itemRef = this.rltDb.object("PocketTable/reservations/"+this.userAuth.auth.currentUser.uid);
    this.itemRef.snapshotChanges().subscribe(data=>{
      let iteradores = data.payload.val();
      
      this.reservaciones = [];
      for(let id in iteradores){
        this.reservaciones.push(iteradores[id]);
      }
    });
  }

  goToDetalles(RestObj){
    this.service.setRestaurant(RestObj);
    this.router.navigate(["/Detalles"]);
  }
}
