import { mockEnrolledCourses, mockUser } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Award, CheckCircle, Clock, Sparkles, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router';
import { styles } from './MyLearningPage.styles';

import { PageHeader } from '@/components/ui/PageHeader';
import { FeaturedResumeCard } from '@/features/dashboard/components/FeaturedResumeCard';
import { StatGridBento } from '@/features/dashboard/components/StatGridBento';
import { WeeklyGoalWidget } from '@/features/dashboard/components/WeeklyGoalWidget';
import { LearningActivityChart } from '@/features/dashboard/components/LearningActivityChart';

export default function MyLearningPage() {
  const navigate = useNavigate();
  const lastAccessedCourse = mockEnrolledCourses[0];

  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={styles.container}>
        
        <PageHeader 
          icon={<Sparkles size={32} />}
          title={`Welcome back, ${mockUser.name.split(' ')[0]}!`}
          description="You're making great progress. Let's keep the momentum going today."
        />

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

        <Grid container spacing={3} sx={styles.gridRow2}>
          <Grid size={{ xs: 12, lg: 4 }}>
            <StatGridBento 
              stats={[
                { label: 'Hours', value: '34h', icon: <Clock size={20} />, color: '#3b82f6' },
                { label: 'Courses', value: '2', icon: <CheckCircle size={20} />, color: '#10b981' },
                { label: 'Certs', value: '1', icon: <Award size={20} />, color: '#8b5cf6' },
                { label: 'Avg', value: '92%', icon: <TrendingUp size={20} />, color: '#f59e0b' },
              ]} 
            />
          </Grid>
          <Grid size={{ xs: 12, lg: 8 }}>
            <LearningActivityChart />
          </Grid>
        </Grid>

      </Container>
    </StudentLayout>
  );
}
