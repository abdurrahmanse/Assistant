import { apiClient } from '../../../core/api/apiClient';
import { CHECKOUT_MOCK_DATA, type CheckoutMockData } from '../data/checkout.mock';

export class CheckoutRepository {
  async getCheckoutData(): Promise<CheckoutMockData> {
    return apiClient.get('/api/v1/checkout', CHECKOUT_MOCK_DATA);
  }
  
  async updateCheckoutData(data: Partial<CheckoutMockData>): Promise<CheckoutMockData> {
    return apiClient.get('/api/v1/checkout', { ...CHECKOUT_MOCK_DATA, ...data });
  }
}

export const checkoutRepository = new CheckoutRepository();
