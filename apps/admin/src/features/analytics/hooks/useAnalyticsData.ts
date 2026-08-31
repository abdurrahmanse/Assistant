import { useQuery } from '@tanstack/react-query';
import { analyticsService } from '../api/analytics.service';

export const useAnalyticsData = () => {
  return useQuery({
    queryKey: ['analytics'],
    queryFn: () => analyticsService.getAnalyticsData(),
  });
};
