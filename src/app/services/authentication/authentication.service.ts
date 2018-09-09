import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  AUTHENTICATE_USER = 'http://netorutes.pythonanywhere.com/api/v1/auth/token/'; 
  REGISTER_USER='http://netorutes.pythonanywhere.com/api/v1/public/user/create_user/';
  user; 

  constructor(private http: HttpClient) {
    this.http = http;
  }

  logInUser(data, callback, error) {
    return this.http.post(this.AUTHENTICATE_USER, data).subscribe(callback, error);
  }

  registerUser(data, callback, error) { 
    return this.http.post(this.REGISTER_USER, data).subscribe(callback, error);
  }

}
