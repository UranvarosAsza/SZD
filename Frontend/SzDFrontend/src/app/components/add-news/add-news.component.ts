import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  title = "";
  description = "";
  label = "";

  constructor(private newsService: NewsService) {

  }

  ngOnInit(): void {

  }

  send() {
    const newnews = new News(this.title, this.description, this.label);
    this.newsService.postNews(newnews).subscribe(
      (data) => {
        console.log(data);
      }, error => {
        console.log('error: ', error)
      });
  }

}
