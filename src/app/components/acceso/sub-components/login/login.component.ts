import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Formulario : FormGroup;

  constructor(private login:LoginService, private userAuth:AngularFireAuth, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.Formulario = this.fb.group({
      Email: [''],
      Password: ['']
    })
  }

  Entrar(){
    const email = this.Formulario.controls.Email.value;
    const clave = this.Formulario.controls.Password.value;
    this.login.Loguearse(email,clave);
  }
}
