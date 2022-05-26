import { Component, Input, OnInit } from '@angular/core';
import { Poll } from 'src/app/models/poll.model';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.css']
})
export class PollComponent implements OnInit {
  @Input() houseId = '';
  
  polls: any;
  poll!: Poll;

  constructor(private pollService : PollService) { }

  
  ngOnInit(): void {
    this.pollService.getPolls().subscribe(
      (data) => {
        console.log(data);
        this.polls = data;
      }, error => {
        console.log('error: ', error)
      });
  }
  vote(poll: Poll): void{
    let data = {...poll, votes: ++poll.votes };
    this.pollService.putPolls(data).subscribe(
      (data) => {
        console.log(data);
      }, error => {
        console.log('error: ', error)
      });    
  }
}