/**
 * Core API Client
 * Enterprise-ready fetch wrapper supporting both mock data and real HTTP requests
 * based on environment variables.
 */

// Use Vite's import.meta.env if available, otherwise default to mock mode
const isProductionApi = typeof import.meta !== 'undefined' && import.meta.env?.VITE_USE_REAL_API === 'true';
const API_BASE_URL = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_API_BASE_URL || '/api' : '/api';

export const apiClient = {
  get: async <T>(endpoint: string, mockFallback: T): Promise<T> => {
    if (isProductionApi) {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // 'Authorization': `Bearer ${localStorage.getItem('token')}` // Add auth headers here
        },
      });
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      return response.json();
    }
    
    // Mock behavior
    return new Promise((resolve) => setTimeout(() => resolve(mockFallback), 600));
  },
  
  post: async <T>(endpoint: string, payload: any, mockFallback: T): Promise<T> => {
    if (isProductionApi) {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      return response.json();
    }
    
    // Mock behavior
    return new Promise((resolve) => setTimeout(() => resolve(mockFallback), 800));
  },

  put: async <T>(endpoint: string, payload: any, mockFallback: T): Promise<T> => {
    if (isProductionApi) {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      return response.json();
    }
    return new Promise((resolve) => setTimeout(() => resolve(mockFallback), 800));
  },

  delete: async <T>(endpoint: string, mockFallback: T): Promise<T> => {
    if (isProductionApi) {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
      if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
      return response.json();
    }
    return new Promise((resolve) => setTimeout(() => resolve(mockFallback), 800));
  }
};
