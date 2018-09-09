import { Component, OnInit } from '@angular/core';

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

  constructor() { }

    ngOnInit() {
       this.cars1 = [{field: 'hahaah', header: 'hisuahdiusa'}];
       

        this.cols = [
            { field: 'vin', header: 'Candidato' },
            { field: 'year', header: 'Número' },
            { field: 'brand', header: 'Partido' },
            { field: 'color', header: 'Propostas' }
        ];
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
