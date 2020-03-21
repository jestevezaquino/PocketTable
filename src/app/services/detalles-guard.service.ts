import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { GeneralService } from './general.service';

@Injectable({
  providedIn: 'root'
})
export class DetallesGuardService implements CanActivate {

  constructor(private generalService:GeneralService, private router:Router) { }

  canActivate():boolean{
    if(this.generalService.getRestaurant() == null){
      alert('Aquí no permitimos eso, necesitamos que inicie sesión nuevamente.');
      this.router.navigate(['/Dashboard'])
      return false;
    }
    return true;
  }
}
