import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { House } from '../models/house.model';

@Injectable({
  providedIn: 'root',
})
export class HouseService {
  private url = 'http://localhost:4000/houses';

  httpOptions: any;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthService
  ) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        Authorization: '',
      }),
    };
  }

  getHouseId(adress: String) {
    return this.http.post<any>(
      this.url + '/id',
      JSON.stringify(adress),
      this.httpOptions
    );
  }

/*   getAddressById(id: string){
    return this.http.get<any>(this.url + '/' + id, this.httpOptions);
  } */

  getAdresses() {
    return this.http.get<any>(this.url + '/adresses', this.httpOptions);
  }

  getHouses() {
    return this.http.get<any>(this.url + '/all', this.httpOptions);
  }

  postHouses(house: House) {
    console.log(JSON.stringify(house));
    return this.http.post<House>(
      this.url,
      JSON.stringify(house),
      this.httpOptions
    );
  }

  putHouses(house: House) {
    console.log(JSON.stringify(house));
    return this.http.put<House>(
      this.url,
      JSON.stringify(house),
      this.httpOptions
    );
  }
}
