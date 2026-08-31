import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { CheckCircle2, Star, Clock, BookOpen, GraduationCap, Video, Users, FileText, Smartphone } from 'lucide-react';
import { Skeleton } from '@repo/ui';

export interface CourseOverviewProps {
  course?: any;
  copy?: any;
  totalLessons?: number;
  isLoading?: boolean;
}

const includeIconMap: Record<string, React.ReactNode> = {
  Video: <Video size={20} />,
  FileText: <FileText size={20} />,
  Smartphone: <Smartphone size={20} />,
  GraduationCap: <GraduationCap size={20} />,
};

export function CourseOverview({ course, copy, totalLessons, isLoading }: CourseOverviewProps) {
  if (isLoading || !course || !copy) {
    return (
      <Box sx={{ mb: 8 }}>
        <Skeleton variant="rectangular" width="40%" height={40} sx={{ mb: 4, borderRadius: 2 }} />
        <Grid container spacing={2} sx={{ mb: 6 }}>
          {[1, 2, 3, 4].map((i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <Skeleton variant="rectangular" width="100%" height={64} sx={{ borderRadius: '12px' }} />
            </Grid>
          ))}
        </Grid>

        <Skeleton variant="rectangular" width="30%" height={40} sx={{ mb: 4, borderRadius: 2 }} />
        <Grid container spacing={2} sx={{ mb: 6 }}>
          {[1, 2, 3, 4].map((i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <Skeleton variant="rectangular" height={64} sx={{ borderRadius: '12px' }} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 8 }}>
      <Typography variant="h4" fontWeight={900} mb={4}>{copy.outcomesHeading}</Typography>
      <Grid container spacing={2} sx={{ mb: 8 }}>
        {(course.outcomes || []).map((outcome: string, i: number) => (
          <Grid size={{ xs: 12, sm: 6 }} key={i}>
            <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ p: 2, borderRadius: '12px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', height: '100%' }}>
              <CheckCircle2 size={24} color="#10b981" style={{ flexShrink: 0, marginTop: '2px' }} />
              <Typography variant="body1" fontWeight={500}>{outcome}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" fontWeight={900} mb={4}>{copy.includesHeading}</Typography>
      <Grid container spacing={2}>
        {(copy.includes || []).map((item: { icon: string, text: string }, i: number) => (
          <Grid size={{ xs: 12, sm: 6 }} key={i}>
            <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 2 }}>
              <Box sx={{ color: 'primary.main' }}>
                {includeIconMap[item.icon] || <CheckCircle2 size={20} />}
              </Box>
              <Typography variant="body1" fontWeight={600}>{item.text}</Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
