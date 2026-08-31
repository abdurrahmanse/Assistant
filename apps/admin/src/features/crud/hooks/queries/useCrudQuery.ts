import { useQuery } from '@tanstack/react-query';
import { crudRepository } from '../../repositories/crud.repository';

export const useCrudQuery = () => {
  return useQuery({
    queryKey: ['crud-data'],
    queryFn: () => crudRepository.getCrudData(),
  });
};
