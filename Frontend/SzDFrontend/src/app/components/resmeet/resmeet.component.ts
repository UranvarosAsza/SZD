import { Component,Input, OnInit } from '@angular/core';
import { ResMeetService } from '../../services/residental-meet.service';

@Component({
  selector: 'app-resmeet',
  templateUrl: './resmeet.component.html',
  styleUrls: ['./resmeet.component.css']
})
export class ResmeetComponent implements OnInit {
  @Input() houseId = '';
  resmeet: any;
  
  constructor(private resMeetService : ResMeetService) { }

  ngOnInit(): void {
    this.resMeetService.getResOfHouseId(this.houseId).subscribe(

      (data) => {
        console.log(data);
        this.resmeet = data;
      }, error => {
        console.log('error: ', error);
      });
    
  }

}
