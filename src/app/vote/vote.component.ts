import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { ApirestService } from '../services/apirest/apirest.service';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  selectedVote : Number;
  voteSucess : Boolean = false; 
  voteError: Boolean = false;  
  userId; 
  constructor(private apiRestService: ApirestService, private authenticationService: AuthenticationService) { }

  ngOnInit() {

  }

  vote() { 

    this.apiRestService.getCurrentUser(userId => { 
      console.log(userId.id)
      this.userId = Number(userId.id)
      this.apiRestService.voteInElection({'user': this.userId, 'election': 1, 'candidate': Number(this.selectedVote)}, callback => { 
        this.voteSucess = true; 
      }, error => { 
        this.voteError = true; 
      });
    });
  }

}
