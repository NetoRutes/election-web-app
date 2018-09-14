import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elections-list',
  templateUrl: './elections-list.component.html',
  styleUrls: ['./elections-list.component.css']
})
export class ElectionsListComponent implements OnInit {

  cols: any[];

  constructor() { }

  ngOnInit() {

    this.cols = [
      { field: 'vin', header: 'Eleição' },
      { field: 'year', header: 'Data de início' },
      { field: 'brand', header: 'Data final' },
      { field: 'brand', header: 'Candidatos' },
    ];
  }

}
