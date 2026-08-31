export const mockUser = {
  id: 'usr_1',
  name: 'Alex Johnson',
  email: 'alex@example.com',
  avatar: 'https://i.pravatar.cc/150?img=11',
};

export const mockEnrolledCourses = [
  {
    id: 'c_1',
    title: 'The Fullstack Next.js Masterclass',
    instructor: 'Abdur Rahman',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    progress: 45, // percentage
    totalLessons: 42,
    completedLessons: 19,
    lastAccessed: '2023-10-15T10:00:00Z',
  },
  {
    id: 'c_2',
    title: 'Advanced React Patterns & Performance',
    instructor: 'Abdur Rahman',
    thumbnail: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
    progress: 10,
    totalLessons: 24,
    completedLessons: 2,
    lastAccessed: '2023-10-12T08:30:00Z',
  },
  {
    id: 'c_3',
    title: 'Modern UI/UX with Tailwind & Framer Motion',
    instructor: 'Abdur Rahman',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    progress: 100,
    totalLessons: 15,
    completedLessons: 15,
    lastAccessed: '2023-09-01T14:20:00Z',
  }
];

export const mockCourseDetails = {
  id: 'c_1',
  title: 'The Fullstack Next.js Masterclass',
  instructor: 'Abdur Rahman',
  progress: 45,
  modules: [
    {
      id: 'm_1',
      title: 'Module 1: Foundations',
      lessons: [
        { id: 'l_1', title: 'Welcome to the Course', duration: '05:20', isCompleted: true, type: 'video', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
        { id: 'l_2', title: 'Environment Setup', duration: '12:45', isCompleted: true, type: 'video', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
        { id: 'l_3', title: 'Understanding Next.js App Router', duration: '18:10', isCompleted: true, type: 'video' },
      ]
    },
    {
      id: 'm_2',
      title: 'Module 2: Data Fetching',
      lessons: [
        { id: 'l_4', title: 'Server Components vs Client Components', duration: '15:30', isCompleted: false, type: 'video', videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
        { id: 'l_5', title: 'Fetching Data with Prisma', duration: '22:15', isCompleted: false, type: 'video' },
        { id: 'l_6', title: 'Module 2 Quiz', duration: '10:00', isCompleted: false, type: 'quiz' },
      ]
    },
    {
      id: 'm_3',
      title: 'Module 3: Authentication',
      lessons: [
        { id: 'l_7', title: 'Setting up NextAuth', duration: '25:00', isCompleted: false, type: 'video' },
        { id: 'l_8', title: 'Protected Routes & Middleware', duration: '19:40', isCompleted: false, type: 'video' },
      ]
    }
  ],
  resources: [
    { id: 'r_1', title: 'Next.js Cheatsheet (PDF)', size: '2.4 MB' },
    { id: 'r_2', title: 'Source Code (GitHub Repository)', size: 'Link' }
  ]
};
