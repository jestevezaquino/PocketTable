import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Formulario : FormGroup;

  constructor(private userAuth:AngularFireAuth, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.Formulario = this.fb.group({
      Email: [''],
      Password: ['']
    })
  }

  async Loguearse(){
    const email = this.Formulario.controls.Email.value;
    const clave = this.Formulario.controls.Password.value;

    await this.userAuth.auth.signInWithEmailAndPassword(email,clave)
    .then(()=>{
      this.router.navigate(["/Dashboard"]);
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
    });
  }
}
