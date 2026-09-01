import type { ReactNode } from 'react';

export interface Course {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  thumbnail: string;
  price: string;
  tags: string[];
  rating: number;
  students: number;
}

export interface Assignment {
  id: string;
  course: string;
  title: string;
  status: string;
  dueDate: string;
  grade?: string | null;
}

export interface Mark {
  id: string;
  course: string;
  title: string;
  score: number;
  total: number;
  date: string;
}

export interface ActivityItem {
  id: string;
  type: 'completion' | 'grade' | 'badge';
  title: string;
  description: string;
  time: string;
}

export interface Note {
  id: string;
  timestamp: string;
  text: string;
  date: string;
}

export interface Resource {
  id: string;
  title: string;
  type: 'pdf' | 'link' | 'code' | 'video';
  size?: string;
  url: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  icon: ReactNode;
  trend?: string;
  color?: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
  type: string;
  videoUrl?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: CourseLesson[];
}

export interface CourseDetails {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  thumbnail?: string;
  progress?: number;
  modules?: CourseModule[];
  resources?: Resource[];
}

export interface EnrolledCourse {
  id: string;
  slug: string;
  title: string;
  instructor: string;
  thumbnail: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  lastAccessed: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
}
