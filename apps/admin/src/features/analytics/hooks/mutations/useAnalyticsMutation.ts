import { useMutation, useQueryClient } from '@tanstack/react-query';
import { analyticsRepository } from '../../repositories/analytics.repository';
import type { AnalyticsMockData } from '@repo/api-client';

export const useAnalyticsMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (data: Partial<AnalyticsMockData>) => analyticsRepository.updateAnalyticsData(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['analytics'] });
    },
  });
};
