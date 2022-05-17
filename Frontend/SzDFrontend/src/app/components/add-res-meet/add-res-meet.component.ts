import { Component, OnInit } from '@angular/core';
import { ResidentalMeet } from 'src/app/models/residental-meet.model';
import { ResMeetService } from 'src/app/services/residental-meet.service';

@Component({
  selector: 'app-add-res-meet',
  templateUrl: './add-res-meet.component.html',
  styleUrls: ['./add-res-meet.component.css']
})
export class AddResMeetComponent implements OnInit {

  title = "";
  description = "";
  financial_id = 1;
  house_id = 1;
  showResMeet = false;

  constructor(private resMeetService: ResMeetService) { }

  ngOnInit(): void { }

  send() {
    const newResMeet = new ResidentalMeet(
      this.title,
      this.description,
      this.financial_id,
      this.house_id
    );
    this.resMeetService.postResMeets(newResMeet).subscribe(
      (data) => {
        console.log(data);
      }, error => {
        console.log('error ', error)
      }
    );
  }

  showhide() {
    if (this.showResMeet == true) {
      this.showResMeet = false;
    } else {
      this.showResMeet = true;
    }
  }
}
