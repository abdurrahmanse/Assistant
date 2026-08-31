import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { FileText, HelpCircle, Award, Users, Sparkles } from 'lucide-react';
import type { CourseItem } from '@repo/api-client';
import { useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';

export interface CourseFeaturesProps {
  course: CourseItem;
  copy: NonNullable<ReturnType<typeof useCourseDetailQuery>['data']>;
}

export function CourseFeatures({ course, copy }: CourseFeaturesProps) {
  if (!course.features) return null;

  const featureList = [
    { key: 'assignments', label: 'Real-world Assignments', icon: <FileText size={32} />, active: course.features.assignments, color: '#3b82f6' },
    { key: 'quizzes', label: 'Interactive Quizzes', icon: <HelpCircle size={32} />, active: course.features.quizzes, color: '#ec4899' },
    { key: 'certificate', label: 'Certificate of Completion', icon: <Award size={32} />, active: course.features.certificate, color: '#10b981' },
    { key: 'mentorship', label: '1-on-1 Mentorship', icon: <Users size={32} />, active: course.features.mentorship, color: '#8b5cf6' },
  ];

  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
        <Sparkles size={36} color="#f59e0b" /> {copy.featuresHeading}
      </Typography>
      <Grid container spacing={3}>
        {featureList.map((f) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={f.key}>
            <Box sx={{ 
              p: 4, 
              borderRadius: '20px', 
              bgcolor: 'background.paper', 
              border: '1px solid', 
              borderColor: f.active ? 'divider' : 'transparent',
              opacity: f.active ? 1 : 0.4,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: f.active ? 2 : 0,
              transition: 'all 0.3s',
              filter: f.active ? 'none' : 'grayscale(100%)',
              '&:hover': f.active ? { transform: 'translateY(-4px)', boxShadow: 4, borderColor: f.color } : {}
            }}>
              <Box sx={{ color: f.color, mb: 2 }}>{f.icon}</Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>
                {f.label}
              </Typography>
              {!f.active && (
                <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 700, mt: 1, textTransform: 'uppercase' }}>
                  Not Included
                </Typography>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
