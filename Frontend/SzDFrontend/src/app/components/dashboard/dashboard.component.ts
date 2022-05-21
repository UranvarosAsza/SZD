import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showResMeetandFinancial = false;
  showNewsandPolls = false;
  loggedinuser : any;

  constructor(public auth: AuthService) { }


  ngOnInit(): void {

    //console.log(this.auth.user$.subscribe(data=>{console.log(data)}));
    this.makeUser();
  }

  showhideNewsandPolls() {
    if (this.showNewsandPolls == true) {
      this.showNewsandPolls = false;
    } else {
      this.showNewsandPolls = true;
    }
  }

  showhideResMeetandFin() {
    if (this.showResMeetandFinancial == true) {
      this.showResMeetandFinancial = false;
    } else {
      this.showResMeetandFinancial = true;
    }
  }

  makeUser() {

    if(localStorage.getItem('userData') || localStorage.getItem('userData')!= undefined ){

      console.log("userdata: " + localStorage.getItem('userData'));
    
      const userbase = JSON.parse(localStorage.getItem("userData")!);
     
      this.loggedinuser = new User(userbase[0].user_id, userbase[0].username, userbase[0].isHouseMaster, userbase[0].adress, 1);
    
      console.log(this.loggedinuser);
    }else{

      console.log("User not logged in")
    }
    
  }
}
