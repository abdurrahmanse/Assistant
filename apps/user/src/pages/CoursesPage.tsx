import React from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button, Badge as Chip } from '@repo/ui';
import { Star, Users, ArrowRight } from 'lucide-react';
import { mockAvailableCourses } from '@/data/mock';
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
              <Box sx={(theme) => ({
                height: '100%', display: 'flex', flexDirection: 'column',
                borderRadius: '24px', 
                border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
                bgcolor: 'rgba(255,255,255,0.6)',
                ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
                backdropFilter: 'blur(24px)',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '8px 8px 0px rgba(99,102,241,1)',
                  borderColor: 'primary.main',
                }
              })}>
                <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                  <Box component="img" src={course.thumbnail} alt={course.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                    <Chip label={course.price} size="small" sx={{ fontWeight: 900, borderRadius: '8px', bgcolor: 'background.paper', color: 'text.primary', border: '2px solid #000', boxShadow: '2px 2px 0px #000' }} />
                  </Box>
                </Box>
                
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Stack direction="row" spacing={1} mb={2}>
                    {course.tags.map(tag => (
                      <Chip key={tag} label={tag} size="small" sx={{ borderRadius: '6px', fontWeight: 700, bgcolor: 'primary.50', color: 'primary.main' }} />
                    ))}
                  </Stack>
                  <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight={600} mb={3}>
                    by {course.instructor}
                  </Typography>
                  
                  <Box sx={{ mt: 'auto' }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                      <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: '#f59e0b' }}>
                        <Star size={16} fill="currentColor" />
                        <Typography variant="body2" fontWeight={800} color="text.primary">{course.rating}</Typography>
                      </Stack>
                      <Stack direction="row" alignItems="center" spacing={1} color="text.secondary">
                        <Users size={16} />
                        <Typography variant="body2" fontWeight={600}>{course.students}</Typography>
                      </Stack>
                    </Stack>
                    <Button variant="primary" fullWidth endIcon={<ArrowRight size={16} />} onClick={() => navigate('/checkout')}>
                      Enroll Now
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}
