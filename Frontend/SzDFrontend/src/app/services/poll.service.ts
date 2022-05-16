import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
    providedIn: 'root'
})
export class GoalService {
    private url = 'http://localhost:8080/poll/all';

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


    getGoals() {
        return this.http.get<any>(this.url, this.httpOptions);
    }

}
