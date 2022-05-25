import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit, OnChanges {
  @Input() pinned = false;

  news: any;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().subscribe(
      (data: any) => {
        console.log(data);
        this.news = this.pinned ? data.filter(this.isPinned) : data;
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.newsService.getNews().subscribe(
      (data: any) => {
        console.log(data);
        this.news = this.pinned ? data.filter(this.isPinned) : data;
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  isPinned(news: News) {
    return news.label === 'Pinned';
  }
}
