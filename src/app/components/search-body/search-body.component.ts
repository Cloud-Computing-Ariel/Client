import { Component, OnInit } from '@angular/core';
import {
  SearchTableData,
  SearchTableCollsToDisplay,
} from 'src/app/consts/searchpage-data';

const MOCK_DATA: SearchTableData[] = [
  {
    ingredient1: '4',
    ingredient2: '12',
    ingredient3: '555',
    ingredient4: '64',
    amount: '2',
    time_in_process: 'now',
    time: 'maybe now',
  },
];

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.css'],
})
export class SearchBodyComponent implements OnInit {
  constructor() {}

  displayedColumns = SearchTableCollsToDisplay;
  dataSource = MOCK_DATA;

  ngOnInit(): void {}
}
