import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { Star, Users, Clock, Layers } from 'lucide-react';
import type { CourseItem } from '@repo/api-client';
import { useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';

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
        <Chip label={course.level} variant="outlined" sx={{ fontWeight: 700, borderRadius: '6px' }} />
        {course.stack && <Chip label={course.stack} variant="outlined" sx={{ fontWeight: 700, borderRadius: '6px', borderStyle: 'dashed' }} />}
      </Stack>

      <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.15, fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>{course.title}</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 5, fontSize: '1.2rem', lineHeight: 1.7 }}>{course.description}</Typography>

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

      {course.instructor && (
        <Stack direction="row" alignItems="center" spacing={2} sx={{ p: 2.5, borderRadius: '16px' }}>
          <Avatar src="/static/images/avatar/1.jpg" sx={{ bgcolor: 'primary.main', width: 56, height: 56, fontWeight: 900 }}>
            {course.instructor.charAt(0)}
          </Avatar>
          <Box>
            <Typography variant="caption" color="text.secondary" fontWeight={600} sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>
              {copy.instructorLabel}
            </Typography>
            <Typography variant="subtitle1" fontWeight={800} sx={{ fontSize: '1.1rem' }}>{course.instructor}</Typography>
          </Box>
        </Stack>
      )}
    </Box>
  );
}
