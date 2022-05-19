import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResidentalMeet } from '../models/residental-meet.model';
import { AuthService } from './auth.service';



@Injectable({
    providedIn: 'root'
})
export class ResMeetService {
    private url = 'localhost:4000/residental_meeting';

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


    getResMeets() {
        return this.http.get<any>(this.url +"/all", this.httpOptions);
    }

    postResMeets(resMeet : ResidentalMeet){
        console.log(JSON.stringify(resMeet));
        return this.http.post<any>(this.url ,JSON.stringify(resMeet), this.httpOptions);
    }
}
