import { apiClient } from '../../../core/api/apiClient';
import { CHECKOUT_MOCK_DATA, type CheckoutMockData } from '../data/checkout.mock';

class CheckoutService {
  async getCheckoutData(): Promise<CheckoutMockData> {
    return apiClient.get('/api/v1/checkout', CHECKOUT_MOCK_DATA);
  }
}

export const checkoutService = new CheckoutService();
