import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { ShieldCheck, Laptop, MessagesSquare, FileCode2, Award, Users } from 'lucide-react';
import { Skeleton } from '@repo/ui';

export interface CourseFeaturesProps {
  course?: any;
  copy?: any;
  isLoading?: boolean;
}

export function CourseFeatures({ course, copy, isLoading }: CourseFeaturesProps) {
  if (isLoading || !course || !copy) {
    return (
      <Box sx={{ mb: 6 }}>
        <Skeleton variant="rectangular" width="40%" height={40} sx={{ mb: 4, mx: 'auto', borderRadius: 2 }} />
        <Grid container spacing={3}>
          {[1, 2, 3, 4].map((i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Skeleton variant="rectangular" height={160} sx={{ borderRadius: '20px' }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  
  const featuresList = [];
  if (course.features?.assignments) {
    featuresList.push({ icon: <FileCode2 size={32} />, title: 'Real-world Assignments', description: 'Practice what you learn with hands-on coding.' });
  }
  if (course.features?.quizzes) {
    featuresList.push({ icon: <Laptop size={32} />, title: 'Interactive Quizzes', description: 'Test your knowledge after every module.' });
  }
  if (course.features?.certificate) {
    featuresList.push({ icon: <Award size={32} />, title: 'Certificate of Completion', description: 'Stand out to recruiters with a verified certificate.' });
  }
  if (course.features?.mentorship) {
    featuresList.push({ icon: <Users size={32} />, title: '1-on-1 Mentorship', description: 'Get personal guidance from industry experts.' });
  }

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h4" fontWeight={900} mb={4} textAlign="center">{copy.featuresHeading}</Typography>
      <Grid container spacing={3}>
        {featuresList.map((feature: any, i: number) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
            <Stack spacing={2} alignItems="center" textAlign="center" sx={{ p: 3, borderRadius: '20px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', height: '100%' }}>
              <Box sx={{ color: 'primary.main', p: 2, borderRadius: '50%', bgcolor: 'rgba(99,102,241,0.1)' }}>
                {feature.icon}
              </Box>
              <Typography variant="subtitle1" fontWeight={800}>{feature.title}</Typography>
              <Typography variant="body2" color="text.secondary">{feature.description}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
