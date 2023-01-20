export interface SearchCity {
  id: number;
  name: string;
}

export interface SearchTableData {
  title: string;
}

export const SearchTableData: SearchTableData[] = [
  {
    title: 'Total number of orders',
  },
  {
    title: 'Total number of open orders',
  },
  {
    title: 'Average time spent',
  },
  {
    title: 'Number of open stores',
  },
];
