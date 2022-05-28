import { Component, OnInit } from '@angular/core';
import { ResMeetService } from '../../services/residental-meet.service';

@Component({
  selector: 'app-resmeet',
  templateUrl: './resmeet.component.html',
  styleUrls: ['./resmeet.component.css']
})
export class ResmeetComponent implements OnInit {
  resmeet: any;

  constructor(private resMeetService : ResMeetService) { }

  ngOnInit(): void {
    this.resMeetService.getResMeets().subscribe(

      (data) => {
        console.log(data);
        this.resmeet = data;
      }, error => {
        console.log('error: ', error)
      });
    
  }

}
