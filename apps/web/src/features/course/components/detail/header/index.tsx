import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Badge as Chip } from '@repo/ui';
import { Clock, BookOpen, GraduationCap, Video, Users, FileText, Smartphone } from 'lucide-react';
import { Skeleton } from '@repo/ui';

export interface CourseHeaderProps {
  course?: any;
  copy?: any;
  totalLessons?: number;
  isLoading?: boolean;
}

export function CourseHeader({ course, copy, totalLessons, isLoading }: CourseHeaderProps) {
  if (isLoading || !course || !copy) {
    return (
      <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Skeleton width={80} height={32} sx={{ borderRadius: 2 }} />
          <Skeleton width={100} height={32} sx={{ borderRadius: 2 }} />
        </Stack>
        <Skeleton variant="rectangular" width="90%" height={80} sx={{ mb: 3, borderRadius: 2 }} />
        <Skeleton width="100%" height={24} />
        <Skeleton width="80%" height={24} sx={{ mb: 6 }} />
        <Skeleton variant="rectangular" width="100%" height={100} sx={{ borderRadius: '16px' }} />
      </Box>
    );
  }

  return (
    <Box sx={{ flex: 1, minWidth: 0, width: '100%' }}>
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Chip label={course.level} color="primary" variant="solid" sx={{ fontWeight: 800, borderRadius: '6px' }} />
        <Chip label={course.category} variant="outline" sx={{ fontWeight: 700, borderRadius: '6px' }} />
      </Stack>

      <Typography variant="h1" sx={{ fontWeight: 900, mb: 3, lineHeight: 1.1, letterSpacing: '-0.02em', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
        {course.title}
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.6, maxWidth: 800 }}>
        {course.description}
      </Typography>

      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 2, p: 2, pr: 4, borderRadius: '16px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
        <Box component="img" src={course.instructor.avatar} sx={{ width: 48, height: 48, borderRadius: '50%' }} />
        <Box>
          <Typography variant="subtitle2" color="text.secondary" fontWeight={600} gutterBottom sx={{ lineHeight: 1 }}>{copy.instructorLabel}</Typography>
          <Typography variant="subtitle1" fontWeight={800} sx={{ lineHeight: 1 }}>{course.instructor.name}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
