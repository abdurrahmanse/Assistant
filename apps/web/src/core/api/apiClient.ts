/**
 * A generic mock API client.
 * In the future, you will swap this logic to use Axios or Fetch to hit your real backend.
 * All feature services should call this client to request data.
 */
class ApiClient {
  /**
   * Simulates a GET request by resolving the provided mock data after a delay.
   */
  async get<T>(endpoint: string, mockData: T, delayMs: number = 300): Promise<T> {
    console.log(`[API Client] GET ${endpoint}`);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData);
      }, delayMs);
    });
  }

  // In the future, you can easily add post, put, delete methods here that wrap axios.
}

export const apiClient = new ApiClient();
