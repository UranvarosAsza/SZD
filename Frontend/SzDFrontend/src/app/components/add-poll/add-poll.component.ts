import { Component, OnInit } from '@angular/core';
import { Poll } from 'src/app/models/poll.model';
import { PollService } from 'src/app/services/poll.service';

@Component({
  selector: 'app-add-poll',
  templateUrl: './add-poll.component.html',
  styleUrls: ['./add-poll.component.css']
})
export class AddPollComponent implements OnInit {

  title = "";
  description = "";
  label = "";
  house_id = 1;
  showAddpoll = false;
  constructor(private pollService: PollService) {

  }

  ngOnInit(): void {
    
  }

  send() {
    const newPoll = new Poll(this.title, this.description, this.label, this.house_id);
    this.pollService.postPolls(newPoll).subscribe(
      (data) => {console.log(data);
      }, error => {
        console.log('error ', error)
      });
  }
  showhide(){
    if(this.showAddpoll == true){
      this.showAddpoll = false;
    }else{
      this.showAddpoll = true;
    }
    
  }

}
