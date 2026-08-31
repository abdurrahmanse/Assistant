import { create } from 'zustand';

interface UiState {
  sidebarOpen: boolean;
  themeMode: 'light' | 'dark' | 'system';
  toggleSidebar: () => void;
  setThemeMode: (mode: 'light' | 'dark' | 'system') => void;
}

export const useUiStore = create<UiState>((set) => ({
  sidebarOpen: false,
  themeMode: 'system',
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setThemeMode: (mode) => set({ themeMode: mode }),
}));
