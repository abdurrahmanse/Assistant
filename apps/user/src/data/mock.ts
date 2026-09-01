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

export const mockAssignments = [
  { id: 'a_1', title: 'React Performance Optimization', course: 'Advanced React Patterns', dueDate: 'Tomorrow, 11:59 PM', status: 'Pending', grade: null },
  { id: 'a_2', title: 'Next.js Routing Quiz', course: 'The Fullstack Next.js Masterclass', dueDate: 'Oct 20, 2023', status: 'Submitted', grade: null },
  { id: 'a_3', title: 'Build a Tailwind Dashboard', course: 'Modern UI/UX with Tailwind', dueDate: 'Oct 10, 2023', status: 'Graded', grade: '95/100' }
];

export const mockMarks: { id: string; title: string; course: string; date: string; score: number; total: number }[] = [
  { id: 'm_1', title: 'Midterm Assessment', course: 'Advanced React Patterns', date: 'Oct 05, 2023', score: 92, total: 100 },
  { id: 'm_2', title: 'CSS Grid Challenge', course: 'Modern UI/UX with Tailwind', date: 'Sep 28, 2023', score: 100, total: 100 },
  { id: 'm_3', title: 'API Integration Test', course: 'The Fullstack Next.js Masterclass', date: 'Sep 15, 2023', score: 85, total: 100 }
];

export const mockCertificates = [
  { id: 'cert_1', title: 'Modern UI/UX with Tailwind & Framer Motion', issueDate: 'Sep 05, 2023', imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80' }
];

export const mockRankings: { rank: number; name: string; points: number; avatar: string; isCurrentUser?: boolean }[] = [
  { rank: 1, name: 'Sarah Connor', points: 12500, avatar: 'https://i.pravatar.cc/150?img=5' },
  { rank: 2, name: 'John Doe', points: 11200, avatar: 'https://i.pravatar.cc/150?img=3' },
  { rank: 3, name: 'Alex Johnson', points: 10500, avatar: 'https://i.pravatar.cc/150?img=11', isCurrentUser: true },
  { rank: 4, name: 'Emma Watson', points: 9800, avatar: 'https://i.pravatar.cc/150?img=9' },
  { rank: 5, name: 'Michael Smith', points: 9100, avatar: 'https://i.pravatar.cc/150?img=12' }
];

export const mockAvailableCourses = [
  {
    id: 'c_4',
    title: 'Mastering TypeScript in 2024',
    instructor: 'Abdur Rahman',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    price: '$49.99',
    rating: 4.8,
    students: 1240,
    tags: ['TypeScript', 'JavaScript']
  },
  {
    id: 'c_5',
    title: 'Node.js Backend Architecture',
    instructor: 'Abdur Rahman',
    thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80',
    price: '$59.99',
    rating: 4.9,
    students: 890,
    tags: ['Node.js', 'Backend']
  },
  {
    id: 'c_6',
    title: 'Figma to React: The Complete Guide',
    instructor: 'Abdur Rahman',
    thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    price: '$39.99',
    rating: 4.7,
    students: 2100,
    tags: ['Design', 'React']
  },
  {
    id: 'c_7',
    title: 'GraphQL API Masterclass',
    instructor: 'Abdur Rahman',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    price: '$44.99',
    rating: 4.6,
    students: 650,
    tags: ['GraphQL', 'API']
  }
];
