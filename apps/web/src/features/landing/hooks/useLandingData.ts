import { useQuery } from '@tanstack/react-query';
import { landingService } from '../api/landing.service';

export const useLandingData = () => {
  return useQuery({
    queryKey: ['landing'],
    queryFn: () => landingService.getLandingData(),
  });
};
