import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button } from '@repo/ui';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router';
import { CourseHeader } from '../header';

export interface CourseHeroProps {
  course?: any;
  copy?: any;
  totalLessons?: number;
  isLoading?: boolean;
}

export function CourseHero({ course, copy, totalLessons, isLoading }: CourseHeroProps) {
  const navigate = useNavigate();

  return (
    <Box sx={(theme) => ({ 
      pt: { xs: 14, sm: 20 }, pb: { xs: 4, sm: 6 }, 
      position: 'relative', overflow: 'hidden',
      bgcolor: 'rgba(255,255,255,0.4)',
      ...theme.applyStyles('dark', { bgcolor: 'rgba(20,20,25,0.4)' }),
      borderBottom: '1px solid', borderColor: 'divider',
      mb: 6
    })}>
      <Container maxWidth="lg">
        {course?.gradient && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: course.gradient }} />}
        {!course?.gradient && !isLoading && <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'primary.main' }} />}
      
        <Button startIcon={<ArrowLeft size={18} />} onClick={() => navigate('/courses')} sx={{ mb: 4, fontWeight: 700, color: 'text.secondary', textTransform: 'none' }}>
          {copy?.backLabel || 'Back'}
        </Button>

        <CourseHeader course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
      </Container>
    </Box>
  );
}
