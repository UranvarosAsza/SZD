import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: any;
  constructor(private newsService : NewsService) { }

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