import { useCourseByIdQuery, useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import MarketingLayout from '@/layouts/MarketingLayout';
import { useParams } from 'react-router';

import { CourseBody } from '@/features/course/components/detail/body';
import { CourseHero } from '@/features/course/components/detail/hero';
import { CourseNotFound } from '@/features/course/components/detail/not-found';
import { CourseTags } from '@/features/course/components/detail/tags';

export default function CourseDetailPage(props: { disableCustomTheme?: boolean }) {
  const { id } = useParams<{ id: string }>();

  const { data: course, isLoading: courseLoading } = useCourseByIdQuery(id ?? '');
  const { data: copy, isLoading: copyLoading } = useCourseDetailQuery();

  const isLoading = courseLoading || copyLoading;

  if (!isLoading && (!course || !copy)) {
    return (
      <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
        <CourseNotFound copy={copy} />
      </MarketingLayout>
    );
  }

  const totalLessons = course?.modules?.reduce((acc: any, m: any) => acc + m.lessons, 0) ?? 0;

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <CourseHero course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
      <CourseTags course={course} copy={copy} isLoading={isLoading} />
      <CourseBody course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
    </MarketingLayout>
  );
}
