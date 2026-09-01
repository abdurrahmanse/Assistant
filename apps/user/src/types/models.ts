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
