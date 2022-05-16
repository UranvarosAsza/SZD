import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { News } from '../models/news.model';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    private url = 'http://localhost:4000/news';

    // currentUser: User;
    httpOptions: any;

    constructor(
        private http: HttpClient,
        private authenticationService: AuthService
    ) {
        // this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '',
                'Access-Control-Allow-Headers': ''
            })
        };
    }




    getNews() {
        return this.http.get<any>(this.url + "/all", this.httpOptions);
    }

    postNews(news: News) {
        console.log(JSON.stringify(news));
        return this.http.post<News>(this.url, JSON.stringify(news), this.httpOptions);
    }
}