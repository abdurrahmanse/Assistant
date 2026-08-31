import { useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Box from '@mui/material/Box';
import { Badge as Chip } from '@repo/ui';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { CourseItem } from '@repo/api-client';
import { Clock, Layers, Star, Users } from 'lucide-react';
import * as React from 'react';

export interface CourseHeaderProps {
  course: CourseItem;
  copy: NonNullable<ReturnType<typeof useCourseDetailQuery>['data']>;
  totalLessons: number;
}

export function CourseHeader({ course, copy, totalLessons }: CourseHeaderProps) {
  return (
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
        <Chip label={course.type} color={course.type === 'Free' ? 'success' : 'primary'} sx={{ fontWeight: 800, borderRadius: '6px' }} />
        <Chip label={course.level} variant="outline" sx={{ fontWeight: 700, borderRadius: '6px' }} />
        {course.stack && <Chip label={course.stack} variant="outline" sx={{ fontWeight: 700, borderRadius: '6px', borderStyle: 'dashed' }} />}
      </Stack>

      <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.15, }}>{course.title}</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1rem', lineHeight: 1.7 }}>{course.description}</Typography>

      <Stack direction="row" sx={{ mb: 5, flexWrap: 'wrap', gap: 4, bgcolor: 'background.paper', p: 2, borderRadius: '16px', border: '1px solid', borderColor: 'divider' }}>
        {course.rating && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Star size={24} fill="#f59e0b" color="#f59e0b" />
            <Box>
              <Typography fontWeight={900} lineHeight={1}>{course.rating}</Typography>
              <Typography color="text.secondary" variant="caption">{copy.ratingLabel}</Typography>
            </Box>
          </Stack>
        )}
        {course.studentsCount && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Users size={24} color="#6366f1" />
            <Box>
              <Typography fontWeight={900} lineHeight={1}>{course.studentsCount.toLocaleString()}</Typography>
              <Typography color="text.secondary" variant="caption">{copy.studentsLabel}</Typography>
            </Box>
          </Stack>
        )}
        {course.duration && (
          <Stack direction="row" alignItems="center" spacing={1}>
            <Clock size={24} color="#ec4899" />
            <Box>
              <Typography fontWeight={900} lineHeight={1}>{course.duration}</Typography>
              <Typography color="text.secondary" variant="caption">{copy.durationLabel}</Typography>
            </Box>
          </Stack>
        )}
        <Stack direction="row" alignItems="center" spacing={1}>
          <Layers size={24} color="#14b8a6" />
          <Box>
            <Typography fontWeight={900} lineHeight={1}>{totalLessons}</Typography>
            <Typography color="text.secondary" variant="caption">{copy.lessonsLabel}</Typography>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}
