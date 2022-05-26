import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

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
