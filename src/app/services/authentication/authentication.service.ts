import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  static ENDPOINT = 'http://netorutes.pythonanywhere.com/api/v1/auth/token/'; 

  constructor(private http: HttpClient) {
    this.http = http;
  }

  logInUser(user, password, callback) {
    console.log(user, password); 
    return this.http.post(AuthenticationService.ENDPOINT, user, password).subscribe(callback);
  }
}
