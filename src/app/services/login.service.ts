import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  estado:boolean;

  constructor(private userAuth:AngularFireAuth, private router:Router) { }

  async Loguearse(correo:string, contrasena:string){
    const email = correo;
    const clave = contrasena;

    await this.userAuth.auth.signInWithEmailAndPassword(email,clave)
    .then(()=>{
      this.router.navigate(["/Dashboard"]);
      this.estado=true;
    })
    .catch((error)=>{
      const errorCode = error.code;
      switch(errorCode){
        case "auth/invalid-email":
          alert("Debe de ingresar un email válido.");
          break;
        case "auth/user-not-found":
          alert("No existe una cuenta asociada a este email.");
          break;
        case 'auth/operation-not-allowed':
          alert('El servidor no está disponible en estos momentos.');
          break;
        default:
          alert("La contraseña no es correcta.")
          break;
      }
      this.estado = false;
    });
  }
}
