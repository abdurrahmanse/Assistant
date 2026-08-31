import { useQuery } from '@tanstack/react-query';
import { checkoutRepository } from '../../repositories/checkout.repository';

export const useCheckoutQuery = () => {
  return useQuery({
    queryKey: ['checkout'],
    queryFn: () => checkoutRepository.getCheckoutData(),
  });
};
