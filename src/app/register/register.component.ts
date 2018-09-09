import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: String; 
  password: String;
  email: String; 

  constructor(private authenticationService : AuthenticationService, public router: Router) { }

  ngOnInit() {
  }

  register(){ 
    this.authenticationService.registerUser({"username": this.user, "password": this.password, "email" : this.email}, response =>{ 
      this.router.navigate(['/menu']);
    }, error => { });
  }
}
