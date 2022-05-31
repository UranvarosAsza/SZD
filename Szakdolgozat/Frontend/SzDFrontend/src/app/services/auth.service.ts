import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any;
  constructor() {}

  getHouseId() {
    return (JSON.parse(localStorage.getItem('userData') as string)[0] as User).house_id;
  }

  getUserDetails() {
    if (localStorage.getItem('userData')) {
      return localStorage.getItem('userData');
    } else {
      return null;
    }
  }

  setDataInLocalStorage(variableName: string, data: string) {
    console.log(data);
    localStorage.setItem(variableName, data);
    console.log(localStorage.getItem(variableName));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearStorage() {
    localStorage.clear();
  }
}
