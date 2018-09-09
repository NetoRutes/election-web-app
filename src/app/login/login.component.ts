import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent implements OnInit {

  user : string; 
  password: String; 
  error: Boolean;
  constructor( private authenticationService : AuthenticationService, public router: Router) { }

  ngOnInit() {
    this.error = false; 
    if ( (localStorage.getItem('token') !== null) && (localStorage.getItem('user') !== null) ) { 
      this.router.navigate(['/']);
    }
  }

  login() { 
    this.authenticationService.logInUser({"username": this.user, "password": this.password}, response => { 
      localStorage.setItem('user', this.user); 
      localStorage.setItem('token', response['token']);
      this.router.navigate(['/menu']);
    }, error =>{ 
      console.log('errorrrrrrrrrrrrr');
      this.error = true;
    });
  }

}
