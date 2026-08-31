import { useMutation, useQueryClient } from '@tanstack/react-query';
import { landingRepository } from '../../repositories/landing.repository';
import type { LandingMockData } from '../../data/landing.mock';

export const useLandingMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<LandingMockData>) => landingRepository.updateLandingData(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['landing'] });
    },
  });
};
