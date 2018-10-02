import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApirestService {

  API_ENDPOINT = 'http://netorutes.pythonanywhere.com/api/v1/';

  token = localStorage.getItem('token');

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getCandidates(callback) { 
    return this.http.get( this.API_ENDPOINT + 'candidate/', { headers: { Authorization : 'Token 4d3de37d506889b206b2aa811dcce7f2669c00fe'}}).subscribe(callback);
  }

  getElections(callback) { 
    return this.http.get(this.API_ENDPOINT + 'election/', { headers: { Authorization : 'Token 4d3de37d506889b206b2aa811dcce7f2669c00fe'}}).subscribe(callback);
  }

  voteInElection(data, callback, error){ 
    return this.http.post(this.API_ENDPOINT + 'vote/', data, { headers: { Authorization : 'Token 4d3de37d506889b206b2aa811dcce7f2669c00fe'}}).subscribe(callback, error);
  }
}

