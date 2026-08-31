import { useQuery } from '@tanstack/react-query';
import { checkoutService } from '../api/checkout.service';

export const useCheckoutData = () => {
  return useQuery({
    queryKey: ['checkout'],
    queryFn: () => checkoutService.getCheckoutData(),
  });
};
