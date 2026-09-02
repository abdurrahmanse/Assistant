import type { SystemMetrics } from '@repo/api-client';
import { mockSystemMetrics } from '@repo/api-client';

export const analyticsRepository = {
  getSystemMetrics: async (): Promise<SystemMetrics> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockSystemMetrics);
      }, 500);
    });
  }
};
