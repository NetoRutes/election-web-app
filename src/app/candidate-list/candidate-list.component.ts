import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../services/apirest/apirest.service';
import { AuthenticationService } from '../services/authentication/authentication.service';

interface Car { field: String, header: String }; 
@Component({
  selector: 'app-candidate-list',
  templateUrl: './candidate-list.component.html',
  styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {

  candidateList: Array<any>; 
  
  constructor(private apiRestService: ApirestService, private authenticationService: AuthenticationService) { }

    ngOnInit() {
         this.apiRestService.getCandidates( candidates => { 
           this.candidateList = candidates;
        });
    }

}
