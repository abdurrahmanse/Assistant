import { mockEnrolledCourses } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Badge as Chip } from '@repo/ui';
import { CheckCircle2, Play, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function MyLearningPage() {
  const navigate = useNavigate();

  return (
    <StudentLayout>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 2 }}>
            My Learning
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Jump back in and continue your progress.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {mockEnrolledCourses.map((course) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
              
              <Box 
                onClick={() => navigate(`/courses/${course.id}`)} 
                sx={(theme) => ({
                  height: '100%', display: 'flex', flexDirection: 'column',
                  borderRadius: '24px', 
                  border: '2px solid', 
                  borderColor: 'rgba(0,0,0,0.1)',
                  bgcolor: 'rgba(255,255,255,0.6)',
                  ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
                  backdropFilter: 'blur(24px)',
                  cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px) rotate(-1deg)',
                    boxShadow: '8px 8px 0px rgba(99,102,241,1)',
                    borderColor: 'primary.main',
                    '& .course-thumbnail': { transform: 'scale(1.08) rotate(1deg)' },
                    '& .course-icon': { transform: 'scale(1.1) translateY(-4px)' }
                  }
              })}>
                
                <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', p: 1.5 }}>
                  <Box sx={{ width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                    <Box component="img" src={course.thumbnail} alt={course.title} className="course-thumbnail" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
                  </Box>
                  
                  {/* Progress Badge */}
                  <Box sx={{ position: 'absolute', top: 24, right: 24, display: 'flex', gap: 1 }}>
                    <Chip 
                      icon={course.progress === 100 ? <CheckCircle2 size={14} style={{ color: '#000' }} /> : <PlayCircle size={14} style={{ color: '#000' }} />} 
                      label={course.progress === 100 ? 'Completed' : 'In Progress'} 
                      size="small" 
                      sx={{ 
                        fontWeight: 900, borderRadius: '8px', 
                        bgcolor: course.progress === 100 ? '#10b981' : '#f59e0b', color: '#000',
                        border: '2px solid #000', boxShadow: '2px 2px 0px #000',
                        textTransform: 'uppercase', letterSpacing: 0.5
                      }} 
                    />
                  </Box>
                  
                  {/* Playful Floating Icon */}
                  <Box className="course-icon" sx={{ 
                    position: 'absolute', bottom: -8, left: 24, p: 1.5, 
                    borderRadius: '16px', bgcolor: 'primary.main', color: 'primary.contrastText', 
                    display: 'flex', border: '2px solid #000', boxShadow: '4px 4px 0px #000',
                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                    <Play size={24} />
                  </Box>
                </Box>

                <Box sx={{ p: 3, pt: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, mb: 1 }}>
                    {course.instructor}
                  </Typography>
                  
                  <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, lineHeight: 1.2, letterSpacing: '-0.02em' }}>{course.title}</Typography>
                  
                  <Box sx={{ mt: 'auto', mb: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                      <Typography variant="body2" fontWeight={800} color={course.progress === 100 ? 'success.main' : 'primary.main'}>
                        {course.progress}%
                      </Typography>
                      <Typography variant="caption" color="text.secondary" fontWeight={700}>
                        {course.completedLessons} / {course.totalLessons} lessons
                      </Typography>
                    </Stack>
                    <LinearProgress 
                      variant="determinate" 
                      value={course.progress} 
                      color={course.progress === 100 ? 'success' : 'primary'}
                      sx={{ height: 8, borderRadius: 4, bgcolor: 'divider', '& .MuiLinearProgress-bar': { borderRadius: 4 } }}
                    />
                  </Box>

                  <Button 
                    variant={course.progress === 100 ? "outline" : "primary"} 
                    fullWidth 
                  >
                    {course.progress === 100 ? 'Review Course' : (course.progress === 0 ? 'Start Course' : 'Continue Learning')}
                  </Button>
                </Box>
              </Box>

            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}
