import { useQuery } from '@tanstack/react-query';
import { analyticsRepository } from '../../repositories/analytics.repository';

export const useAnalyticsQuery = () => {
  return useQuery({
    queryKey: ['analytics'],
    queryFn: () => analyticsRepository.getAnalyticsData(),
  });
};
