import { mockAvailableCourses } from '@/data/mock';
import { CourseCard } from '@/features/courses/components/CourseCard';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

export default function CoursesPage() {
  const navigate = useNavigate();

  return (
    <StudentLayout>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 2 }}>
            Discover Courses
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Expand your skills with our premium catalog.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {mockAvailableCourses.map((course) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
              <CourseCard course={course} onEnroll={(slug) => navigate(`/checkout?course=${slug}`)} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}
