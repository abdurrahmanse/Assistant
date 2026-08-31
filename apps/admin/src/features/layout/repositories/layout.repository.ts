import { apiClient, mockLayoutData, type LayoutMockData } from '@repo/api-client';

class LayoutRepository {
  async getLayoutData(): Promise<LayoutMockData> {
    return apiClient.get('/layout-data', mockLayoutData);
  }
}
export const layoutRepository = new LayoutRepository();
