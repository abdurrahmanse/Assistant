import { useState, useEffect } from 'react';
import { SkeletonCourseCard } from '@/components/ui/SkeletonCourseCard';
import { Database } from 'lucide-react';
import { mockAvailableCourses } from '@/data/mock';
import { CourseCard } from '@/features/courses/components/CourseCard';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

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
          <Box sx={{ 
            p: 2, bgcolor: alpha(brand[500], 0.1), color: brand[500], 
            borderRadius: '16px', border: `1px solid ${alpha(brand[500], 0.2)}`,
            boxShadow: `0 8px 24px ${alpha(brand[500], 0.15)}` 
          }}>
            <Database size={32} />
          </Box>
          <Box>
            <Typography variant="h3" fontWeight={700} sx={{ letterSpacing: '-0.02em', mb: 0.5 }}>
              Dataset & Pipeline Catalog
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Discover and provision new computational training modules.
            </Typography>
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
