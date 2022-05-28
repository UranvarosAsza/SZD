import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { FinancialTable } from '../models/financial-table.model';

@Injectable({
  providedIn: 'root',
})
export class FinTableService {
  private url = 'http://localhost:4000/financial';

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

  getFinTables() {
    return this.http.get<any>(this.url + '/all', this.httpOptions);
  }

  getFinOfHouseId(house_id: string) {
    return this.http.get<number>(this.url + '/' + house_id, this.httpOptions);
  }

  getTablesById(id: string) {
    return this.http.get<any>(this.url + '/' + id, this.httpOptions);
  }

  postFinTables(finTable: FinancialTable) {
    console.log(JSON.stringify(finTable));
    return this.http.post<any>(
      this.url,
      JSON.stringify(finTable),
      this.httpOptions
    );
  }
}
