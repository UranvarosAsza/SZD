import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

  
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  showNewsandPolls = false;

  constructor(public auth: AuthService) {}
  

  ngOnInit(): void {

    //console.log(this.auth.user$.subscribe(data=>{console.log(data)}));
  }

  showhide(){
    if(this.showNewsandPolls == true){
      this.showNewsandPolls = false;
    }else{
      this.showNewsandPolls = true;
    }
  }
}
