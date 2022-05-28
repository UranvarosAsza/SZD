import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { NewsService } from 'src/app/services/news.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.scss'],
})
export class AddNewsComponent implements OnInit {
  title = '';
  description = '';
  label = '';
  house_id = 1;
  showAddNews = false;

  constructor(
    private newsService: NewsService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  send() {
    const newnews = new News(this.title, this.description, this.label, this.auth.getHouseId());
    console.log(newnews)
    this.newsService.postNews(newnews).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }
  showhide() {
    if (this.showAddNews == true) {
      this.showAddNews = false;
    } else {
      this.showAddNews = true;
    }
  }
}
