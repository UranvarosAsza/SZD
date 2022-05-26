import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/user.model';
import { HouseService } from '../../services/house.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnChanges {
  user: any;
  address = '';

  constructor(
    public auth: AuthService,
    private router: Router,
    private houseService: HouseService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(this.auth.getUserDetails() as string)[0] as User;
    /* this.houseService.getAddressById(this.user.house_id).subscribe(
      (data: any) => {
        this.address = data;
      },
      (error) => {
        console.log('error ', error);
      }
    ); 
    this.address = 'Address2'; ///delete */ ///WHAT?
  }

  ngOnChanges(changes: SimpleChanges): void {}

  logout() {
    this.auth.clearStorage();
    this.router.navigate(['']);
  }
}
