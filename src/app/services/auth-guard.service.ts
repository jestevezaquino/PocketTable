import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authService:LoginService, private router:Router) { }

  canActivate():boolean{
    if(!this.authService.estado){
      this.router.navigate(['/Acceso']);
      return false;
    }
    return true;
  }
}
