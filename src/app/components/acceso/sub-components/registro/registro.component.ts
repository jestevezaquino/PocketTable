import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  Formulario:FormGroup

  constructor(private fb:FormBuilder) {}

  ngOnInit(): void {
    this.Formulario = this.fb.group({
      userName: ["",[Validators.required]],
      userEmail: ["",[Validators.required, Validators.email]],
      userPass: ["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
    })
  }
}
