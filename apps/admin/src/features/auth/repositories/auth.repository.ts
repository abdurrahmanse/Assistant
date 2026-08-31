import { apiClient, mockAuthData, type AuthMockData } from '@repo/api-client';

class AuthRepository {
  async getAuthData(): Promise<AuthMockData> {
    return apiClient.get('/auth-data', mockAuthData);
  }
}
export const authRepository = new AuthRepository();
