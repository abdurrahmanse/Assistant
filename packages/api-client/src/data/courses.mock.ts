import type { Course } from '../types/course';

export const mockCourses: Course[] = [
  {
    id: 'crs_001',
    title: 'Neural Networks 101',
    slug: 'neural-networks-101',
    status: 'Published',
    level: 'Beginner',
    instructor: 'Dr. Marcus Chen',
    tags: ['AI', 'Deep Learning'],
    enrolledStudents: 1420,
    lastUpdated: '2026-08-15T09:00:00Z',
    createdAt: '2025-01-10T08:00:00Z'
  },
  {
    id: 'crs_002',
    title: 'Advanced BigQuery Analytics',
    slug: 'advanced-bigquery-analytics',
    status: 'Published',
    level: 'Advanced',
    instructor: 'Sarah Jenkins',
    tags: ['Data Engineering', 'SQL'],
    enrolledStudents: 856,
    lastUpdated: '2026-09-01T14:30:00Z',
    createdAt: '2025-06-22T10:00:00Z'
  },
  {
    id: 'crs_003',
    title: 'Applied Machine Learning Pipeline',
    slug: 'applied-ml-pipeline',
    status: 'Draft',
    level: 'Intermediate',
    instructor: 'Dr. Anita Desai',
    tags: ['MLOps', 'Python'],
    enrolledStudents: 0,
    lastUpdated: '2026-09-02T11:15:00Z',
    createdAt: '2026-08-01T09:00:00Z'
  },
  {
    id: 'crs_004',
    title: 'Introduction to Pandas & Numpy',
    slug: 'intro-pandas-numpy',
    status: 'Published',
    level: 'Beginner',
    instructor: 'Lucas Silva',
    tags: ['Data Science', 'Python'],
    enrolledStudents: 3210,
    lastUpdated: '2026-05-10T16:20:00Z',
    createdAt: '2024-11-05T08:30:00Z'
  },
  {
    id: 'crs_005',
    title: 'Generative AI Architecture',
    slug: 'generative-ai-architecture',
    status: 'Archived',
    level: 'Expert',
    instructor: 'Dr. Marcus Chen',
    tags: ['GenAI', 'LLMs'],
    enrolledStudents: 412,
    lastUpdated: '2025-12-01T10:00:00Z',
    createdAt: '2025-02-15T09:45:00Z'
  }
];
