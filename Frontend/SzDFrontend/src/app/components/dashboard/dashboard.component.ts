import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { HouseService } from 'src/app/services/house.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  showResMeetandFinancial = false;
  showNewsandPolls = false;
  loggedinuser: any;
  houseid = 0;
  adress = "Adress1";
  houses: any;

  constructor(
    public auth: AuthService,
    public houseService: HouseService
  ) { }


  ngOnInit(): void {

    //console.log(this.auth.user$.subscribe(data=>{console.log(data)}));
    this.makeUser();
   // this.getHouseId(this.adress);
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

    if (localStorage.getItem('userData') != undefined) {

      console.log("userdata: " + localStorage.getItem('userData'));

      const userbase = JSON.parse(localStorage.getItem("userData")!);
  
      this.houseid=this.getHouseId(userbase[0].adress);
      this.loggedinuser = new User(userbase[0].user_id, userbase[0].username, userbase[0].isHouseMaster, userbase[0].adress, this.houseid);

      console.log(this.loggedinuser);
    } else {

      console.log("User not logged in")
    }

  }
  
  getHouseId(adress: String) {

    this.houseService.getHouses().subscribe(

      (data) => {
        console.log("houses" + JSON.stringify(data));
        this.houses = data;

        for (let i = 0; i < this.houses.length; i++) {
          if(this.houses[i].adress == adress ){

            return this.houses[i].house_id;
          }
          console.log("asdasd " + this.houses[i].house_id);
        }

      }, error => {
        console.log('error: ', error);
       
      });
      return 0;
  }
}

/*
houses[{
  "house_id": 1, "adress": "Adress1", "HM_id": 1 }, 
{ "house_id": 2, "adress": "Adress2", "HM_id": 1 },
{ "house_id": 3, "adress": "Adress3", "HM_id": 2 },
{ "house_id": 4, "adress": "Adress4", "HM_id": 2 },
{ "house_id": 5, "adress": "Adress5", "HM_id": 3 }]*/