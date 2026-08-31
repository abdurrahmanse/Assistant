import { apiClient, LANDING_MOCK_DATA, type LandingMockData } from '@repo/api-client';

class LandingRepository {
  async getLandingData(): Promise<LandingMockData> {
    return apiClient.get('/landing-data', LANDING_MOCK_DATA);
  }
  async updateLandingData(data: Partial<LandingMockData>): Promise<LandingMockData> {
    return apiClient.post('/landing-data', data, { ...LANDING_MOCK_DATA, ...data });
  }
}
export const landingRepository = new LandingRepository();
