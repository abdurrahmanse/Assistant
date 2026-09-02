import type { Course } from '@repo/api-client';
import { mockCourses } from '@repo/api-client';

export const courseRepository = {
  getCourses: async (): Promise<Course[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([...mockCourses]);
      }, 500);
    });
  },
  
  createCourse: async (course: Omit<Course, 'id' | 'createdAt' | 'lastUpdated' | 'enrolledStudents'>): Promise<Course> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          ...course,
          id: `crs_${Math.floor(Math.random() * 10000)}`,
          enrolledStudents: 0,
          lastUpdated: new Date().toISOString(),
          createdAt: new Date().toISOString(),
        });
      }, 600);
    });
  },
  
  updateCourse: async (id: string, updates: Partial<Course>): Promise<Course> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const course = mockCourses.find(c => c.id === id);
        if (course) {
          resolve({ ...course, ...updates, lastUpdated: new Date().toISOString() });
        } else {
          reject(new Error('Course not found'));
        }
      }, 600);
    });
  },

  deleteCourse: async (id: string): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 600);
    });
  }
};
