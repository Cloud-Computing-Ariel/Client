export interface HeaderCardDataResponse {
  totalOpenOrders: number;
  totalOrders: number;
  openStores: number;
  avgTimeSpent: number;
}

export interface BodyCardDataResponse {
  topToppingsOrdered: { data: []; categories: [] };
  topBranchesLowestWaitTime: { data: []; categories: [] };
  DistriByArea: { data: []; categories: [] };
  numberOfOrders: { data: []; categories: [] };
}

export const instanceOfHeaderCardData = (
  object: any
): object is HeaderCardDataResponse => {
  return (
    object &&
    typeof object === 'object' &&
    'totalOpenOrders' in object &&
    'totalOrders' in object &&
    'openStores' in object &&
    'avgTimeSpent' in object
  );
};

export const instanceOfBodyCardData = (
  object: any
): object is BodyCardDataResponse => {
  return (
    object &&
    typeof object === 'object' &&
    'topToppingsOrdered' in object &&
    'topBranchesLowestWaitTime' in object &&
    'DistriByArea' in object &&
    'numberOfOrders' in object
  );
};

export interface SearchResultsDTO {
  olives: number;
  mushrooms: number;
  onions: number;
  corn: number;
  amount: number;
  processTime: Date;
  time: Date;
}

export interface AnalyzeResultsDTO {
  confidence: string;
  support: string;
  consequent: string;
  antecedent: string;
}
