import { useMutation, useQueryClient } from '@tanstack/react-query';
import { checkoutRepository } from '../../repositories/checkout.repository';
import type { CheckoutMockData } from '../../data/checkout.mock';

export const useCheckoutMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<CheckoutMockData>) => checkoutRepository.updateCheckoutData(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['checkout'] });
    },
  });
};
