import { useMutation, useQueryClient } from '@tanstack/react-query';
import { contentRepository } from '../../repositories/content.repository';
import type { ContentAsset } from '@repo/api-client';

export const useCreateContent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: Omit<ContentAsset, 'id' | 'createdAt' | 'lastUpdated'>) => contentRepository.createContent(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'content'] });
    },
  });
};

export const useUpdateContent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, updates }: { id: string; updates: Partial<ContentAsset> }) => contentRepository.updateContent(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'content'] });
    },
  });
};

export const useDeleteContent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => contentRepository.deleteContent(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin', 'content'] });
    },
  });
};
