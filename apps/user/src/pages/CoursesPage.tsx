import { useState, useEffect } from 'react';
import { SkeletonCourseCard } from '@/components/ui/SkeletonCourseCard';
import { Heading, Text } from '@repo/ui';
import { Compass } from 'lucide-react';
import { mockAvailableCourses } from '@/data/mock';
import { CourseCard } from '@/features/courses/components/CourseCard';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

export default function CoursesPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();

  return (
    <StudentLayout>
      

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px', boxShadow: '0 8px 16px rgba(236,72,153,0.3)' }}>
            <Compass size={32} />
          </Box>
          <Box>
            <Heading level={2}>Discover Courses</Heading>
            <Text muted>Expand your skills with our premium catalog.</Text>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {isLoading 
            ? Array.from(new Array(6)).map((_, i) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={i}>
                  <SkeletonCourseCard />
                </Grid>
              ))
            : mockAvailableCourses.map((course) => (
                <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
                  <CourseCard course={course} onEnroll={(slug) => navigate(`/checkout?course=${slug}`)} />
                </Grid>
              ))
          }
        </Grid>
      </Container>
    </StudentLayout>
  );
}
