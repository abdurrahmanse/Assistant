import { apiClient, mockCrudData, type CrudMockData } from '@repo/api-client';

class CrudRepository {
  async getCrudData(): Promise<CrudMockData> {
    return apiClient.get('/crud-data', mockCrudData);
  }
}
export const crudRepository = new CrudRepository();
