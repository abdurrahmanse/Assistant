import React from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Card } from '@repo/ui';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@repo/ui';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import { PlayCircle, Clock } from 'lucide-react';
import { mockEnrolledCourses } from '@/data/mock';
import { useNavigate } from 'react-router';

export default function MyLearningPage() {
  const navigate = useNavigate();

  return (
    <StudentLayout>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 2 }}>
            My Learning
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Jump back in and continue your progress.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {mockEnrolledCourses.map((course) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
              <Card sx={{ 
                height: '100%', display: 'flex', flexDirection: 'column', 
                borderRadius: '24px', overflow: 'hidden',
                transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.1)' }
              }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={course.thumbnail}
                    alt={course.title}
                  />
                  <Box sx={{ 
                    position: 'absolute', bottom: 0, left: 0, right: 0, 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    p: 2, pt: 6
                  }}>
                    <Typography variant="subtitle2" color="white" fontWeight={700}>
                      {course.instructor}
                    </Typography>
                  </Box>
                </Box>
                
                <CardContent sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h6" fontWeight={800} sx={{ mb: 3, lineHeight: 1.3 }}>
                    {course.title}
                  </Typography>

                  <Box sx={{ mt: 'auto', mb: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                      <Typography variant="body2" fontWeight={700} color={course.progress === 100 ? 'success.main' : 'primary.main'}>
                        {course.progress === 100 ? 'Completed' : `${course.progress}% Complete`}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" fontWeight={600}>
                        {course.completedLessons} / {course.totalLessons} lessons
                      </Typography>
                    </Stack>
                    <LinearProgress 
                      variant="determinate" 
                      value={course.progress} 
                      color={course.progress === 100 ? 'success' : 'primary'}
                      sx={{ height: 8, borderRadius: 4, bgcolor: 'divider' }}
                    />
                  </Box>

                  <Button 
                    variant="primary" 
                    fullWidth 
                    color={course.progress === 100 ? "inherit" : "primary"}
                    startIcon={course.progress === 100 ? null : <PlayCircle size={18} />}
                    onClick={() => navigate(`/courses/${course.id}`)}
                    sx={{ py: 1.5, borderRadius: '12px', fontWeight: 700 }}
                  >
                    {course.progress === 100 ? 'Review Course' : (course.progress === 0 ? 'Start Course' : 'Continue Learning')}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}
