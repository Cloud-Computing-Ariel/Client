import { Component, OnInit } from '@angular/core';
import {
  AnalyzeTableData,
  AnalyzeCollsToDisplay,
} from 'src/app/consts/analyzepage-data';

const MOCK_DATA: AnalyzeTableData[] = [
  {
    confidence: '69%',
    support: '75%',
    consequent: 'Olives',
    antecedent: 'Onions',
  },
];

@Component({
  selector: 'app-analyze-body',
  templateUrl: './analyze-body.component.html',
  styleUrls: ['./analyze-body.component.css'],
})
export class AnalyzeBodyComponent implements OnInit {
  ngOnInit(): void {}

  displayedColumns = AnalyzeCollsToDisplay;
  dataSource = MOCK_DATA;
}
