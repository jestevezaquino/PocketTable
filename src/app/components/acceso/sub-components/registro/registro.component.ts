import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  Formulario:FormGroup

  constructor(private userAuth:AngularFireAuth, private rltDatabase:AngularFireDatabase, 
              private fb:FormBuilder, private router:Router) {}

  ngOnInit(): void {
    this.Formulario = this.fb.group({
      CompleteName: ["",[Validators.required]],
      userEmail: ["",[Validators.required, Validators.email]],
      userPass: ["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    })
  }

  async registrarUsuario(){
    const userName = this.Formulario.value.CompleteName;
    const email = this.Formulario.value.userEmail;
    const password = this.Formulario.value.userPass;

    await this.userAuth.auth.createUserWithEmailAndPassword(email,password)
    .then(()=>{
      
      this.userAuth.auth.currentUser.updateProfile({
        displayName: userName,
      });

      const userID = this.userAuth.auth.currentUser.uid;

      this.rltDatabase.database.ref("PocketTable/users/"+userID).set({
        ID: userID, 
        Username: userName,
        Email: email 
      })

      this.userAuth.auth.currentUser.sendEmailVerification;
      alert("Se registró correctamente!")
      this.router.navigate(["/Dashboard"]);
    })
    .catch((error)=>{
      const errorCode = error.code;
      switch(errorCode){
        case 'auth/invalid-email':
          alert('Correo incorrecto.');
          break;
        case 'auth/email-already-in-use':
          alert('Este correo ya está en uso.');
          break;
        case 'auth/operation-not-allowed':
          alert('El servidor no está disponible en estos momentos.');
          break;
        case 'auth/weak-password':
          alert('Contraseña debil.');
          break;
      }
    });
  }
}
