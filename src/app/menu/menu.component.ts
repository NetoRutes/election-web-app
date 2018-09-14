import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: String; 

  constructor(private authenticationService : AuthenticationService, public router: Router) { }

  ngOnInit() {

    if ( localStorage.getItem('token') === null || localStorage.getItem('user')  === null) { 
      this.router.navigate(['/']);
    }

    this.user = localStorage.getItem('user');
  }

  logout(){ 
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
