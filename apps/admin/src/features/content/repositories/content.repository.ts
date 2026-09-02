import type { ContentAsset } from '@repo/api-client';
import { mockContentAssets } from '@repo/api-client';

export const contentRepository = {
  getContent: async (): Promise<ContentAsset[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...mockContentAssets]);
      }, 500);
    });
  },
  
  createContent: async (content: Omit<ContentAsset, 'id' | 'createdAt' | 'lastUpdated'>): Promise<ContentAsset> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...content,
          id: `cnt_${Math.floor(Math.random() * 10000)}`,
          lastUpdated: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        });
      }, 600);
    });
  },
  
  updateContent: async (id: string, updates: Partial<ContentAsset>): Promise<ContentAsset> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const content = mockContentAssets.find(c => c.id === id);
        if (content) {
          resolve({ ...content, ...updates, lastUpdated: new Date().toISOString() });
        } else {
          reject(new Error('Content not found'));
        }
      }, 600);
    });
  },

  deleteContent: async (id: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 600);
    });
  }
};
