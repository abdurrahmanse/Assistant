import { useQuery } from '@tanstack/react-query';
import { authRepository } from '../../repositories/auth.repository';

export const useAuthQuery = () => {
  return useQuery({
    queryKey: ['auth-data'],
    queryFn: () => authRepository.getAuthData(),
  });
};
