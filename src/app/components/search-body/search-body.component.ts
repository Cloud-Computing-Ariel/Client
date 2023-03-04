import { Component, Input, OnInit } from '@angular/core';
import {
  SearchTableData,
  SearchTableCollsToDisplay,
} from 'src/app/consts/searchpage-data';

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.css'],
})
export class SearchBodyComponent implements OnInit {
  @Input() dataSource: SearchTableData[] = [];

  displayedColumns = SearchTableCollsToDisplay;

  constructor() {}

  ngOnInit(): void {}
}
