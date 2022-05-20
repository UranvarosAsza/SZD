import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poll } from '../models/poll.model';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';



@Injectable({
    providedIn: 'root'
})
export class PollService {
    private url = 'http://localhost:4000/poll';

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


    getPolls() {
        return this.http.get<any>(this.url +"/all", this.httpOptions);
    }

    postPolls(poll : Poll){
        console.log(JSON.stringify(poll));
        return this.http.post<Poll>(this.url, JSON.stringify(poll), this.httpOptions);
    }

    putPolls( poll : Poll){
        console.log(JSON.stringify(poll));
            return this.http.put<Poll>(this.url, JSON.stringify(poll), this.httpOptions);
   
    }
}
