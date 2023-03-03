import { Component, Input, OnInit } from '@angular/core';

import {
  ApexChart,
  ChartType,
  ApexAxisChartSeries,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries | ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  labels: any;
  plotOptions: {
    bar: {
      horizontal: boolean;
    };
  };
};

@Component({
  selector: 'app-body-card',
  templateUrl: './body-card.component.html',
  styleUrls: ['./body-card.component.css'],
})
export class BodyCardComponent implements OnInit {
  chartOptions!: ChartOptions;
  @Input() chartType!: ChartType;
  @Input() title!: string;
  @Input() data!: { data: number[]; categories: string[] };

  constructor() {}
  ngOnInit(): void {
    this.updateData();
  }

  updateData() {
    this.chartOptions = {
      series:
        this.chartType === 'donut'
          ? this.data.data
          : [
              {
                name: 'My-series',
                data: this.data.data,
              },
            ],
      chart: {
        height: 350,
        width: 400,
        type: this.chartType,
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      labels: this.data.categories,
      title: {
        text: this.title,
        align: 'left',
      },
      xaxis: {
        categories: this.data.categories,
      },
    };
  }
}
