import React from 'react';
import { mockEnrolledCourses } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Heading, Text } from '@repo/ui';
import { BookOpen, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router';
import { CourseProgressCard } from '@/features/dashboard/components/CourseProgressCard';
import Box from '@mui/material/Box';
import { EmptyState } from '@/components/ui/EmptyState';

export default function MyCoursesPage() {
  const navigate = useNavigate();

  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px', boxShadow: '0 8px 16px rgba(236,72,153,0.3)' }}>
            <BookOpen size={32} />
          </Box>
          <Box>
            <Heading level={2}>My Courses</Heading>
            <Text muted>Resume learning from where you left off.</Text>
          </Box>
        </Box>

        {!mockEnrolledCourses || mockEnrolledCourses.length === 0 ? (
          <EmptyState 
            icon={<FolderOpen size={48} />}
            title="No courses yet"
            description="You haven't enrolled in any courses. Browse the catalog to start learning."
            actionText="Browse Courses"
            onAction={() => navigate('/courses')}
          />
        ) : (
          <Grid container spacing={3}>
            {mockEnrolledCourses.map((course) => (
              <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
                <CourseProgressCard 
                  course={course} 
                  onClick={() => navigate(`/courses/${course.slug}`)} 
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </StudentLayout>
  );
}
