import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../../services/api.service'
import { AuthService } from './../../../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isLogin: boolean = false
  errorMessage: any

  constructor(
    private _api: ApiService, 
    private _auth: AuthService, 
    private _router:Router
  ) { }

  ngOnInit() {

    this.isUserLogin(); 

  }


  
  onSubmit(form: NgForm) {


    this._api.postTypeRequest('users/register', form.value).subscribe((res: any) => {
      console.log(form.value)
      if(form.value.isadmin == ""){

        form.value.isadmin = false
      }
      if (res.status) { 
        console.log(res)
        console.log(form.value)
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
        this._auth.setDataInLocalStorage('token', res.token);  
        this._router.navigate(['login']);
      } else { 
        console.log(res)
        alert(res.msg)
      }
    });

  }

  isUserLogin(){
    
    if(this._auth.getUserDetails() != null){

        this.isLogin = true;
    }

  }

}