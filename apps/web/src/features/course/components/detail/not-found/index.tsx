import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button } from '@repo/ui';
import { useNavigate } from 'react-router';

export function CourseNotFound({ copy }: { copy?: any }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ pt: { xs: 14, sm: 20 }, pb: 8, textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>{copy?.courseNotFound || 'Course not found'}</Typography>
        <Button variant="primary" onClick={() => navigate('/courses')}>{copy?.browseCourses || 'Browse Courses'}</Button>
      </Container>
    </Box>
  );
}
