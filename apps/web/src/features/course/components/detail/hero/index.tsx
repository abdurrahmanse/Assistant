import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Button } from '@repo/ui';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { CourseHeader } from '../header';
import { CourseEnrollmentCard } from '../enrollment';

export interface CourseHeroProps {
  course?: any;
  copy?: any;
  totalLessons?: number;
  isLoading?: boolean;
}

export function CourseHero({ course, copy, totalLessons, isLoading }: CourseHeroProps) {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, position: 'relative', overflow: 'hidden' }}>
      <Container maxWidth="lg">
        {course?.gradient && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: course.gradient }} />}
        {!course?.gradient && !isLoading && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'primary.main' }} />}
      
        <Button startIcon={<ArrowLeft size={18} />} onClick={() => navigate('/courses')} sx={{ mb: 4, fontWeight: 700, color: 'text.secondary', textTransform: 'none' }}>
          {copy?.backLabel || 'Back'}
        </Button>

        <Stack direction={{ xs: 'column', md: 'row' }} spacing={8} alignItems="flex-start">
          <CourseHeader course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
          <CourseEnrollmentCard course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
        </Stack>
      </Container>
    </Box>
  );
}
