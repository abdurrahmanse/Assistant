import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LinearProgress from '@mui/material/LinearProgress';
import MarketingLayout from '@/layouts/MarketingLayout';
import { PlayCircle, Trophy } from 'lucide-react';
import { useLandingQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { useNavigate } from 'react-router';

export default function DashboardPage(props: { disableCustomTheme?: boolean }) {
  const navigate = useNavigate();
  const { data } = useLandingQuery();
  
  // Mock enrolled courses taking the first 3 from mock data
  const enrolledCourses = data?.courses?.items?.slice(0, 3) || [];

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, bgcolor: 'background.default', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontWeight: 900 }}>My Learning</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
              <Trophy size={20} />
              <Typography variant="subtitle1" fontWeight={700}>2 Certificates Earned</Typography>
            </Box>
          </Box>

          <Grid container spacing={4}>
            {enrolledCourses.map((course: any, idx: number) => {
              const progress = [85, 30, 0][idx] || 0; // Mock progress values
              return (
                <Grid size={{ xs: 12, md: 4 }} key={course.id}>
                  <Box sx={{ p: 3, borderRadius: '20px', border: '2px solid', borderColor: 'divider', bgcolor: 'background.paper', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 12px 40px rgba(0,0,0,0.5)' : '0 12px 40px rgba(0,0,0,0.08)' } }}>
                    <Box sx={{ p: 2, borderRadius: '12px', bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'primary.50', color: 'primary.main', mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <PlayCircle size={40} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, flexGrow: 1 }}>{course.title}</Typography>
                    
                    <Box sx={{ mt: 'auto', pt: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="caption" fontWeight={700} color="text.secondary">Progress</Typography>
                        <Typography variant="caption" fontWeight={700} color="primary.main">{progress}%</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4, mb: 3 }} />
                      
                      <Button 
                        variant="contained" 
                        fullWidth 
                        sx={{ fontWeight: 800, py: 1.5, borderRadius: '12px' }}
                        onClick={() => navigate(`/learn/${course.id}`)}
                      >
                        {progress === 0 ? 'Start Course' : 'Continue Learning'}
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </MarketingLayout>
  );
}
