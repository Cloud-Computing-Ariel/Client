import { Component, Input, OnInit } from '@angular/core';
import { AnalyzeCollsToDisplay } from 'src/app/consts/analyzepage-data';
import { AnalyzeResultsDTO } from 'src/app/utils/helpers';

@Component({
  selector: 'app-analyze-body',
  templateUrl: './analyze-body.component.html',
  styleUrls: ['./analyze-body.component.css'],
})
export class AnalyzeBodyComponent implements OnInit {
  ngOnInit(): void {}

  @Input() analyzeData: AnalyzeResultsDTO[] = [];

  displayedColumns = AnalyzeCollsToDisplay;
}
