import { ChartType } from 'ng-apexcharts';

export interface HeaderCardData {
  id: number;
  title: string;
  icon: string;
  number?: number;
}

export interface BodyCardData {
  title: string;
  data: { data: number[]; categories: string[] };
  chartType: ChartType;
  plotOptions?: {
    bar?: {
      horizontal: boolean;
    };
  };
}

export const CardHeaderData: HeaderCardData[] = [
  {
    id: 1,
    title: 'Total number of orders',
    icon: 'remove_red_eye',
    number: -1,
  },
  {
    id: 2,
    title: 'Total number of open orders',
    icon: 'receipt',
    number: -1,
  },
  {
    id: 3,
    title: 'Average time spent',
    icon: 'update',
    number: -1,
  },
  {
    id: 4,
    title: 'Number of open stores',
    icon: 'toys',
    number: -1,
  },
];

export const CardBodyData: BodyCardData[] = [
  {
    title: 'Top 5 topping ordered',
    chartType: 'bar',
    plotOptions: { bar: { horizontal: true } },
    data: { data: [], categories: [] },
  },
  {
    title: 'Top 5 branches with lowest wating time.',
    chartType: 'bar',
    data: { data: [], categories: [] },
  },
  {
    title: 'Distribution by area',
    chartType: 'donut',
    data: { data: [], categories: [] },
  },
  {
    title: 'Number of orders overall',
    chartType: 'donut',
    data: { data: [], categories: [] },
  },
];
