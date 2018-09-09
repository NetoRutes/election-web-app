import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthenticationService {

  static ENDPOINT = 'http://netorutes.pythonanywhere.com/api/v1/auth/token/'; 

  constructor(private http: HttpClient) {
    this.http = http;
  }

  logInUser(data, callback) {
    console.log(data); 
    return this.http.post(AuthenticationService.ENDPOINT, data).subscribe(callback);
  }
}
