import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service';
import { AuthService } from './../../../services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isLogin: boolean = false;
  errorMessage: any;
  houses: any;

  constructor(
    private _api: ApiService,
    private _auth: AuthService,
    private _router: Router,
    private houseService: HouseService
  ) {}

  ngOnInit() {
    if (this._auth.getUserDetails() != null) {
      this._router.navigate(['/dashboard']);
    }

    this.houseService.getAdresses().subscribe(
      (data) => {
        //  console.log("adresses" + JSON.stringify(data));
        this.houses = data;
      },
      (error) => {
        console.log('error: ', error);
      }
    );
  }

  onSubmit(form: NgForm) {
    let data = {
      ...form.value,
      isadmin: form.value.isadmin || false,
    };
    console.log(data)
    this._api.postTypeRequest('users/register', data).subscribe((res: any) => {
      if (res.status) {
        console.log(res);
        //this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        //this._auth.setDataInLocalStorage('token', res.token);
        this._router.navigate(['login']);
      } else {
        console.log(res);
        alert(res.msg);
      }
    });
  }

 /*  isUserLogin() {
    if (this._auth.getUserDetails() != null) {
      this.isLogin = true;
    }
  } */
}
