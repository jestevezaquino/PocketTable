import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private http:HttpClient) { }

  muestraOT(){
    return this.http.get("http://opentable.herokuapp.com/api/restaurants?city=Chicago&per_page=5");
  }
}
