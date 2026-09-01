import { mockEnrolledCourses, mockUser } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { Activity, Award, CheckCircle, Clock, Sparkles, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';
import { styles } from './MyLearningPage.styles';

// Dashboard Components

import { FeaturedResumeCard } from '@/features/dashboard/components/FeaturedResumeCard';
import { Heading, Text } from '@repo/ui';
import { StatGridBento } from '@/features/dashboard/components/StatGridBento';
import { WeeklyGoalWidget } from '@/features/dashboard/components/WeeklyGoalWidget';

export default function MyLearningPage() {
  const navigate = useNavigate();

  const lastAccessedCourse = mockEnrolledCourses[0];

  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={styles.container}>
        
        {/* Modern Welcome Header */}
        <Box sx={styles.headerWrapper}>
          <Box sx={styles.headerIconBox}>
            <Sparkles size={32} />
          </Box>
          <Box>
            <Heading level={2}>
              Welcome back, {mockUser.name.split(' ')[0]}!
            </Heading>
            <Text muted>
              You're making great progress. Let's keep the momentum going today.
            </Text>
          </Box>
        </Box>

        {/* Bento Grid Row 1 */}
        <Grid container spacing={3} sx={styles.gridRow1}>
          <Grid size={{ xs: 12, lg: 8 }}>
            <FeaturedResumeCard 
              course={lastAccessedCourse} 
              onClick={() => navigate(`/courses/${lastAccessedCourse.slug}`)} 
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 4 }}>
            <WeeklyGoalWidget currentDays={4} goalDays={5} message="You're crushing it! Just 1 more day." />
          </Grid>
        </Grid>

        {/* Bento Grid Row 2 */}
        <Grid container spacing={3} sx={styles.gridRow2}>
          <Grid size={{ xs: 12, lg: 4 }}>
            <StatGridBento 
              stats={[
                { label: 'Hours', value: '34h', icon: <Clock size={20} />, color: '#3b82f6' },
                { label: 'Courses', value: '2', icon: <CheckCircle size={20} />, color: '#10b981' },
                { label: 'Certs', value: '1', icon: <Award size={20} />, color: '#ec4899' },
                { label: 'Avg', value: '92%', icon: <TrendingUp size={20} />, color: '#f59e0b' },
              ]} 
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Paper variant="outlined" sx={styles.activityPaper}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={styles.activityHeaderStack}>
                <Box>
                  <Typography variant="h6" fontWeight={800} sx={styles.activityTitle}>
                    <Activity size={20} color="var(--template-palette-primary-main)" /> Learning Activity
                  </Typography>
                  <Typography variant="body2" color="text.secondary">Hours spent learning over the last 7 days</Typography>
                </Box>
              </Stack>
              <Box sx={styles.chartWrapper}>
                <BarChart
                  series={[{ data: [1.2, 2.5, 0.8, 4.2, 3.1, 1.5, 2.0], color: 'var(--template-palette-primary-main)' }]}
                  xAxis={[{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], scaleType: 'band' }]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  borderRadius={6}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>

      </Container>
    </StudentLayout>
  );
}
