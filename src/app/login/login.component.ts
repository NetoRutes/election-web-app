import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  user : String; 
  password: String; 

  constructor( private authenticationService : AuthenticationService) { }

  ngOnInit() {
  }

  login() { 
    console.log('login');
    console.log(this.user);
    
    this.authenticationService.logInUser( {"username": this.user, "password": this.password}, response => { 
      console.log(response);
    });
  }
}
