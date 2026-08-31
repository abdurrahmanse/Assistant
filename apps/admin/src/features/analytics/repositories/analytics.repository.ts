import { apiClient, ANALYTICS_MOCK_DATA, type AnalyticsMockData } from '@repo/api-client';

class AnalyticsRepository {
  async getAnalyticsData(): Promise<AnalyticsMockData> {
    return apiClient.get('/analytics-data', ANALYTICS_MOCK_DATA);
  }
  async updateAnalyticsData(data: Partial<AnalyticsMockData>): Promise<AnalyticsMockData> {
    return apiClient.post('/analytics-data', data, { ...ANALYTICS_MOCK_DATA, ...data });
  }
}
export const analyticsRepository = new AnalyticsRepository();
