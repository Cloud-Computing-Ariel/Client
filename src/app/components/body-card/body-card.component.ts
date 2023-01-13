import { Component, Input, OnInit } from '@angular/core';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ChartType,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

@Component({
  selector: 'app-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.css'],
})
export class BodyCardComponent implements OnInit {
  chartOptions!: ChartOptions;
  @Input() chartType!: string;
  @Input() title!: string;

  constructor() {}
  ngOnInit(): void {
    this.chartInit();
  }

  chartInit() {
    this.chartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        width: 380,
        type: this.chartType as ChartType,
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
