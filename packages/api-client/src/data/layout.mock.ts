export const mockLayoutData = {
  sidebar: {
    mainMenu: [
      { text: 'Dashboard', icon: 'Home', path: '/' },
      { text: 'Students', icon: 'Users', path: '/employees' },
      { text: 'Courses', icon: 'ClipboardList', path: '/' },
      { text: 'Sales Analytics', icon: 'LineChart', path: '/' },
    ],
    secondaryMenu: [
      { text: 'Platform Settings', icon: 'Settings', path: '/' },
      { text: 'Help Center', icon: 'Info', path: '/' },
      { text: 'Instructor Support', icon: 'HelpCircle', path: '/' }
    ]
  },
  header: {
    title: 'Instructor Dashboard',
    searchPlaceholder: 'Search courses, students, or sales...'
  }
};
export type LayoutMockData = typeof mockLayoutData;
