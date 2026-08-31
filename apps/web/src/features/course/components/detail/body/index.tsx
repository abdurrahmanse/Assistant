import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { CourseOverview } from '../overview';
import { CourseFeatures } from '../features';
import { CourseCurriculum } from '../curriculum';

export interface CourseBodyProps {
  course?: any;
  copy?: any;
  totalLessons?: number;
  isLoading?: boolean;
}

export function CourseBody({ course, copy, totalLessons, isLoading }: CourseBodyProps) {
  return (
    <>
      <Box sx={{ py: { xs: 4, sm: 6 }, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <CourseOverview course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
          <CourseFeatures course={course} copy={copy} isLoading={isLoading} />
        </Container>
      </Box>

      <Box sx={{ py: { xs: 4, sm: 6 } }}>
        <Container maxWidth="lg">
          <Box>
            <CourseCurriculum course={course} copy={copy} totalLessons={totalLessons} isLoading={isLoading} />
          </Box>
        </Container>
      </Box>
    </>
  );
}
