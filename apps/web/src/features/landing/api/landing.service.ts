import { apiClient } from '../../../core/api/apiClient';
import { LANDING_MOCK_DATA, type LandingMockData } from '../data/landing.mock';

export interface ILandingRepository {
  getLandingData(): Promise<LandingMockData>;
}

class LandingService implements ILandingRepository {
  async getLandingData(): Promise<LandingMockData> {
    // Calling the API client with the mock data, simulating a backend fetch.
    return apiClient.get('/api/v1/landing', LANDING_MOCK_DATA);
  }
}

export const landingService = new LandingService();
