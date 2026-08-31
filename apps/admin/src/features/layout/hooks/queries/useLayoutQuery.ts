import { useQuery } from '@tanstack/react-query';
import { layoutRepository } from '../../repositories/layout.repository';

export const useLayoutQuery = () => {
  return useQuery({
    queryKey: ['layout-data'],
    queryFn: () => layoutRepository.getLayoutData(),
  });
};
