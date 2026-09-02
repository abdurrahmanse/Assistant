import { useQuery } from '@tanstack/react-query';
import { contentRepository } from '../../repositories/content.repository';

export const useContentQuery = () => {
  return useQuery({
    queryKey: ['admin', 'content'],
    queryFn: contentRepository.getContent,
  });
};
