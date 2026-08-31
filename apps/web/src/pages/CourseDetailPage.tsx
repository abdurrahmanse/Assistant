import { useCourseByIdQuery, useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import MarketingLayout from '@/layouts/MarketingLayout';
import { useParams } from 'react-router';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { CourseHero } from '@/features/course/components/detail/hero';
import { CourseNotFound } from '@/features/course/components/detail/not-found';
import { CourseTags } from '@/features/course/components/detail/tags';
import { CourseOverview } from '@/features/course/components/detail/overview';
import { CourseFeatures } from '@/features/course/components/detail/features';
import { CourseCurriculum } from '@/features/course/components/detail/curriculum';
import { CourseEnrollmentCard } from '@/features/course/components/detail/enrollment';

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
      
      <Container maxWidth="lg" sx={{ pb: 12 }}>
        <Grid container spacing={6}>
          {/* Left Column: Course Details */}
          <Grid size={{ xs: 12, md: 7, lg: 8 }} sx={{ order: { xs: 2, md: 1 } }}>
            <CourseTags course={course} copy={copy} isLoading={isLoading} />
            <Box sx={{ mt: 4 }}>
              <CourseOverview course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
            </Box>
            <Box sx={{ mt: 6 }}>
              <CourseFeatures course={course} copy={copy} isLoading={isLoading} />
            </Box>
            <Box sx={{ mt: 6 }}>
              <CourseCurriculum course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
            </Box>
          </Grid>
          
          {/* Right Column: Sticky Enrollment Card */}
          <Grid size={{ xs: 12, md: 5, lg: 4 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box sx={{ position: { md: 'sticky' }, top: { md: 120 } }}>
              <CourseEnrollmentCard course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </MarketingLayout>
  );
}
