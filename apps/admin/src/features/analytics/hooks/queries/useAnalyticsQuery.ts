import { useQuery } from '@tanstack/react-query';
import { analyticsRepository } from '../../repositories/analytics.repository';

export const useSystemMetricsQuery = () => {
  return useQuery({
    queryKey: ['admin', 'analytics', 'system-metrics'],
    queryFn: analyticsRepository.getSystemMetrics,
  });
};
