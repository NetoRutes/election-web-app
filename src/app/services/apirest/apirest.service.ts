import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApirestService {

  API_ENDPOINT: 'http://netorutes.pythonanywhere.com/api/v1/candidate/1';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getCandidates(callback, error) { 
    return this.http.get(this.API_ENDPOINT, {headers: { 'Authorization': localStorage.getItem('token')}}).subscribe(callback, error);
  }

}

