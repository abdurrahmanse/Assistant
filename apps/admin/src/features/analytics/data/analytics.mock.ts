import { columns, rows } from '../internals/data/gridData';

export const ANALYTICS_MOCK_DATA = {
  grid: {
    columns,
    rows
  },
  // In a real app we'd mock the chart data here too.
};

export type AnalyticsMockData = typeof ANALYTICS_MOCK_DATA;
