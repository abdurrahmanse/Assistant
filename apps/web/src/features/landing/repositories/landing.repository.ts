import { apiClient } from '../../../core/api/apiClient';
import { LANDING_MOCK_DATA, type LandingMockData } from '../data/landing.mock';

export class LandingRepository {
  async getLandingData(): Promise<LandingMockData> {
    return apiClient.get('/api/v1/landing', LANDING_MOCK_DATA);
  }
  
  async updateLandingData(data: Partial<LandingMockData>): Promise<LandingMockData> {
    return apiClient.get('/api/v1/landing', { ...LANDING_MOCK_DATA, ...data });
  }
}

export const landingRepository = new LandingRepository();
