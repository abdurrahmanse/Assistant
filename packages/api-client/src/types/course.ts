export type CourseStatus = 'Draft' | 'Published' | 'Archived';
export type CourseLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface Course {
  id: string;
  title: string;
  slug: string;
  status: CourseStatus;
  level: CourseLevel;
  instructor: string;
  tags: string[];
  enrolledStudents: number;
  lastUpdated: string;
  createdAt: string;
}
