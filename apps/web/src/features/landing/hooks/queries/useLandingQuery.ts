import { useQuery } from '@tanstack/react-query';
import { landingRepository } from '../../repositories/landing.repository';

export const useLandingQuery = () => {
  return useQuery({
    queryKey: ['landing'],
    queryFn: () => landingRepository.getLandingData(),
  });
};
