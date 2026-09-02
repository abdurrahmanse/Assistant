import React from 'react';
import { mockEnrolledCourses } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Terminal, FolderOpen } from 'lucide-react';
import { useNavigate } from 'react-router';
import { CourseProgressCard } from '@/features/dashboard/components/CourseProgressCard';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { EmptyState } from '@/components/ui/EmptyState';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export default function MyCoursesPage() {
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
            <Terminal size={32} />
          </Box>
          <Box>
            <Typography variant="h3" fontWeight={700} sx={{ letterSpacing: '-0.02em', mb: 0.5 }}>
              Active Environments
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Resume execution in your provisioned training pipelines.
            </Typography>
          </Box>
        </Box>

        {!mockEnrolledCourses || mockEnrolledCourses.length === 0 ? (
          <EmptyState 
            icon={<FolderOpen size={48} />}
            title="No active pipelines"
            description="You haven't provisioned any training environments yet."
            actionText="Initialize New Context"
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
