import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '@auth0/auth0-angular';
import { Poll } from '../models/poll.model';


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
}
