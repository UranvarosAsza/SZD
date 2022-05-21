import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ApiService } from '../../services/api.service'
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any
  constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router,
   // public loggedInUser : User
  ) { }

  ngOnInit() {

    this.isUserLogin(); 

  }


  
  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
    this._api.postTypeRequest('users/login', form.value).subscribe((res: any) => {
     
      if (res.status) { 
       
        this._auth.setDataInLocalStorage('userData',JSON.stringify(res.data) );  
        this._auth.setDataInLocalStorage('token', res.token);  
        this._auth.setDataInLocalStorage('userdata' ,JSON.stringify(res.userData));
        console.log(typeof(res.data));
        console.log(localStorage.getItem('userData'));
        this._router.navigate(['']);
      }
    })


  }

  isUserLogin(){

    if(this._auth.getUserDetails() != null){

        this.isLogin = true;
    }

  }

  logout(){
    this._auth.clearStorage()
    this._router.navigate(['']);
  }
}