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

  brands : Array<String> = ['Isadora', 'Alinne', 'Julia'];
  filteredBrands: any[];
  brand: string;

  cars1: Car[];
  cars2: Car[];
  cars3: Car[];
  cols: any[];

  constructor(private apiRestService: ApirestService, private authenticationService: AuthenticationService) { }

    ngOnInit() {
       this.cars1 = [{field: 'hahaah', header: 'hisuahdiusa'}];
       

        this.cols = [
            { field: 'vin', header: 'Nome' },
            { field: 'year', header: 'Sobrenome' },
            { field: 'brand', header: 'Partido' },
        ];

        this.apiRestService.getCandidates(candidates => { 
            console.log(candidates);
        }, error => { 
            console.log(error);
        }); 

        //this.authenticationService.logInUser('dshudhusa', callback => {}, error => { });
    }

  filterBrands(event) {
    this.filteredBrands = [];
    for(let i = 0; i < this.brands.length; i++) {
        let brand = this.brands[i];
        if(brand.toLowerCase().indexOf(event.query.toLowerCase()) == 0) {
            this.filteredBrands.push(brand);
        }
    }
}

}
