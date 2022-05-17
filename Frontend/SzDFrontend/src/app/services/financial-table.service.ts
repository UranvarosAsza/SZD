import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { FinancialTable } from '../models/financial-table.model';



@Injectable({
    providedIn: 'root'
})
export class FinTableService {
    private url = 'localhost:4000/financial';

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
                'Authorization': ''
            })
        };
    }


    getFinTables() {
        return this.http.get<any>(this.url +"/all", this.httpOptions);
    }

    postFinTables(finTable : FinancialTable){
        console.log(JSON.stringify(finTable));
        return this.http.post<any>(this.url , JSON.stringify(finTable), this.httpOptions);
    }
}
