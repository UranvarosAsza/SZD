import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { AuthService } from '../../services/auth.service'
import { NgForm } from '@angular/forms';
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
    private _router:Router,
    
  ) { }

  ngOnInit() {
    this.isUserLogin(); 
  }
  
  onSubmit(form: NgForm) {
    let data = { 
      ...form.value,
      isadmin: form.value.isadmin || false
    };
    console.log(data);
    this._api.postTypeRequest('users/register', data).subscribe((res: any) => {
      if (res.status) { 
        console.log(res);
        this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));  
        this._auth.setDataInLocalStorage('token', res.token);  
        console.log(res.body.userdata);
        this._router.navigate(['login']);
      } else { 
        console.log(res);
        alert(res.msg);
      }
    });
  }

  isUserLogin() {
    if(this._auth.getUserDetails() != null) {
      console.log(this._auth.getUserDetails());
        this.isLogin = true;
    }
  }
  getallAdresses(){
    //house modell és house service után
   

  }
}