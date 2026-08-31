import { apiClient, CHECKOUT_MOCK_DATA, type CheckoutMockData } from '@repo/api-client';

class CheckoutRepository {
  async getCheckoutData(): Promise<CheckoutMockData> {
    return apiClient.get('/checkout-data', CHECKOUT_MOCK_DATA);
  }
  async updateCheckoutData(data: Partial<CheckoutMockData>): Promise<CheckoutMockData> {
    return apiClient.post('/checkout-data', data, { ...CHECKOUT_MOCK_DATA, ...data });
  }
}
export const checkoutRepository = new CheckoutRepository();
