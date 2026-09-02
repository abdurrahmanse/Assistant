import { apiClient } from '@repo/api-client';
import type { User } from '@repo/api-client';
import { mockUsers } from '@repo/api-client';

export const userRepository = {
  getUsers: async (): Promise<User[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...mockUsers]);
      }, 500);
    });
  },
  
  createUser: async (user: Omit<User, 'id' | 'createdAt' | 'lastLogin'>): Promise<User> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...user,
          id: `usr_${Math.floor(Math.random() * 10000)}`,
          createdAt: new Date().toISOString(),
          lastLogin: ''
        });
      }, 600);
    });
  },
  
  updateUser: async (id: string, updates: Partial<User>): Promise<User> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find(u => u.id === id);
        if (user) {
          resolve({ ...user, ...updates });
        } else {
          reject(new Error('User not found'));
        }
      }, 600);
    });
  },

  deleteUser: async (id: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 600);
    });
  }
};
