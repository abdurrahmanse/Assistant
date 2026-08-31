import { apiClient } from '../../../core/api/apiClient';
import { ANALYTICS_MOCK_DATA, type AnalyticsMockData } from '../data/analytics.mock';

class AnalyticsService {
  async getAnalyticsData(): Promise<AnalyticsMockData> {
    return apiClient.get('/api/v1/analytics', ANALYTICS_MOCK_DATA);
  }
}

export const analyticsService = new AnalyticsService();
