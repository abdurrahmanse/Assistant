import { apiClient } from '../../../core/api/apiClient';
import { ANALYTICS_MOCK_DATA, type AnalyticsMockData } from '../data/analytics.mock';

export class AnalyticsRepository {
  async getAnalyticsData(): Promise<AnalyticsMockData> {
    return apiClient.get('/api/v1/analytics', ANALYTICS_MOCK_DATA);
  }
  
  async updateAnalyticsData(data: Partial<AnalyticsMockData>): Promise<AnalyticsMockData> {
    return apiClient.get('/api/v1/analytics', { ...ANALYTICS_MOCK_DATA, ...data });
  }
}

export const analyticsRepository = new AnalyticsRepository();
