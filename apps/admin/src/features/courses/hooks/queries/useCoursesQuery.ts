import { useQuery } from '@tanstack/react-query';
import { courseRepository } from '../../repositories/course.repository';

export const useCoursesQuery = () => {
  return useQuery({
    queryKey: ['admin', 'courses'],
    queryFn: courseRepository.getCourses,
  });
};
