import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../services/apirest/apirest.service';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-elections-list',
  templateUrl: './elections-list.component.html',
  styleUrls: ['./elections-list.component.css']
})
export class ElectionsListComponent implements OnInit {

  electionsList: Array<any>; 
  
  constructor(private apiRestService: ApirestService, private authenticationService: AuthenticationService) { }

    ngOnInit() {
         this.apiRestService.getElections( elections => { 
           this.electionsList = elections;
        });
    }

}
