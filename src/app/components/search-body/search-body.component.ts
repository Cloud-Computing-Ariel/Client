import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SearchTableData } from 'src/app/consts/searchpage-data';

export interface Order {
  ingredient1: number;
  ingredient2: number;
  ingredient3: number;
  ingredient4: number;
  total: number;
  time_to_take: number;
  time: number;
}

@Component({
  selector: 'app-search-body',
  templateUrl: './search-body.component.html',
  styleUrls: ['./search-body.component.css'],
})
export class SearchBodyComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = ['title'];
  colls = SearchTableData;

  ngOnInit(): void {}
}
