import { useQuery } from '@tanstack/react-query';
import { userRepository } from '../../repositories/user.repository';

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ['admin', 'users'],
    queryFn: userRepository.getUsers,
  });
};
