import Container from '@mui/material/Container';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import Stack from '@mui/material/Stack';
import { Badge as Chip } from '@repo/ui';
import { Skeleton } from '@repo/ui';
import { ArrowLeft } from 'lucide-react';
import MarketingLayout from '@/layouts/MarketingLayout';
import { useParams, useNavigate } from 'react-router';
import { useCourseByIdQuery, useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';

import { CourseHeader } from '@/features/course/components/detail/header';
import { CourseEnrollmentCard } from '@/features/course/components/detail/enrollment';
import { CourseOverview } from '@/features/course/components/detail/overview';
import { CourseFeatures } from '@/features/course/components/detail/features';
import { CourseCurriculum } from '@/features/course/components/detail/curriculum';

export default function CourseDetailPage(props: { disableCustomTheme?: boolean }) {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: course, isLoading: courseLoading } = useCourseByIdQuery(id ?? '');
  const { data: copy, isLoading: copyLoading } = useCourseDetailQuery();

  const isLoading = courseLoading || copyLoading;

  if (isLoading) {
    return (
      <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
        <Box sx={{ pt: { xs: 14, sm: 20 }, pb: 8, }}>
          <Container maxWidth="lg">
          
            <Skeleton width={140} height={36} sx={{ mb: 4 }} />
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
              <Box sx={{ flex: 1 }}>
                <Skeleton width="30%" height={32} sx={{ mb: 2 }} />
                <Skeleton width="90%" height={56} sx={{ mb: 2 }} />
                <Skeleton width="80%" height={24} />
                <Skeleton width="60%" height={24} />
              </Box>
              <Skeleton variant="rectangular" width={380} height={560} sx={{ borderRadius: 3 }} />
            </Stack>
        </Container>
          
        </Box>
      </MarketingLayout>
    );
  }

  if (!course || !copy) {
    return (
      <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
        <Box sx={{ pt: { xs: 14, sm: 20 }, pb: 8, textAlign: 'center' }}>
          <Container maxWidth="lg">
          
            <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>{copy?.courseNotFound}</Typography>
            <Button variant="primary" onClick={() => navigate('/courses')}>{copy?.browseCourses}</Button>
        </Container>
          
        </Box>
      </MarketingLayout>
    );
  }

  const totalLessons = course.modules?.reduce((acc, m) => acc + m.lessons, 0) ?? 0;

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      {/* Hero Section */}
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, position: 'relative', overflow: 'hidden' }}>
        <Container maxWidth="lg">
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: course.gradient || 'primary.main' }} />
        
          <Button startIcon={<ArrowLeft size={18} />} onClick={() => navigate('/courses')} sx={{ mb: 4, fontWeight: 700, color: 'text.secondary', textTransform: 'none' }}>
            {copy.backLabel}
          </Button>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="flex-start">
            <CourseHeader course={course} copy={copy} totalLessons={totalLessons} />
            <CourseEnrollmentCard course={course} copy={copy} totalLessons={totalLessons} />
          </Stack>
        
      </Container>
      </Box>

      {/* Topics / Tags Bar */}
      {course.tags && course.tags.length > 0 && (
        <Box sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider', py: 2 }}>
          
            <Container maxWidth="lg">
          <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1, alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary" fontWeight={600}>{copy.topicsLabel}</Typography>
              {course.tags.map((tag) => <Chip key={tag} label={tag} size="small" variant="outline" sx={{ fontWeight: 700, borderRadius: '6px' }} />)}
            </Stack>
          
        </Container>
      </Box>
      )}

      {/* Overview & Features Section */}
      <Box sx={{ py: { xs: 4, sm: 6 }, borderBottom: '1px solid', borderColor: 'divider' }}>
        
          <Container maxWidth="lg">
          <CourseOverview course={course} copy={copy} totalLessons={totalLessons} />
          <CourseFeatures course={course} copy={copy} />
        
      </Container>
      </Box>

      {/* Curriculum Section */}
      <Box sx={{ py: { xs: 4, sm: 6 }, }}>
        <Container maxWidth="lg">
          <Box>
            <CourseCurriculum course={course} copy={copy} totalLessons={totalLessons} />
          </Box>
        </Container>
        
      </Box>
    </MarketingLayout>
  );
}
