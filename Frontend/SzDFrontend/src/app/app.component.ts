import { Component, OnInit } from '@angular/core';
import { NewsService } from './services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SzDFrontend';
  news: any;

  constructor(
    private newsService: NewsService
  ) {

  }

  ngOnInit(): void {
    this.newsService.getNews().subscribe(

      (data) => {
        console.log(data);
        this.news = data;
      }, error => {
        console.log('error: ', error)
      });

  }
}
