import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  Restaurant:any;

  constructor(private http:HttpClient) { }

  setRestaurant(RestObj:any){
    this.Restaurant = RestObj;
  }

  getRestaurant(){
    return this.Restaurant;
  }

  muestraOT()
  {
    return this.http.get("http://opentable.herokuapp.com/api/restaurants?city=Chicago&per_page=5");
  }
  muestraOT2()
  {
    return this.http.get("https://opentable.herokuapp.com/api/restaurants?city=Boston&per_page=5");
  }
  muestraOT3()
  {
    return this.http.get("https://opentable.herokuapp.com/api/restaurants?city=NY&per_page=5");
  }

  restaurantsNY(){
    return this.http.get("https://opentable.herokuapp.com/api/restaurants?city=NY&per_page=15");
  }

  restaurantsBT(){
    return this.http.get("http://opentable.herokuapp.com/api/restaurants?city=Boston&per_page=15");
  }

  restaurantsCG(){
    return this.http.get("http://opentable.herokuapp.com/api/restaurants?city=Chicago&per_page=15");
  }
  restaurantsKS(){
    return this.http.get("http://opentable.herokuapp.com/api/restaurants?city=Kansas&per_page=15");
  }
  restaurantsMM(){
    return this.http.get("http://opentable.herokuapp.com/api/restaurants?city=Miami&per_page=15");
  }
  restaurantsTP(){
    return this.http.get("http://opentable.herokuapp.com/api/restaurants?city=Tampa&per_page=15");
  }
}
