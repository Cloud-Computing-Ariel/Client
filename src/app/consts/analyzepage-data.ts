export interface AnalyzeTableData {
  confidence: string;
  support: string;
  consequent: string;
  antecedent: string;
}

export const AnalyzeCollsToDisplay: string[] = [
  'confidence',
  'support',
  'consequent',
  'antecedent',
];
