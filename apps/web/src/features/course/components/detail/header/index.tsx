import { useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { CourseItem } from '@repo/api-client';
import { AlertCircle, Award, BookOpen, CheckCircle2, Clock, Layers, ListChecks, PlayCircle, Star, Users, Zap } from 'lucide-react';
import * as React from 'react';

const includeIconMap: Record<string, React.ReactNode> = {
  PlayCircle: <PlayCircle size={18} />,
  BookOpen: <BookOpen size={18} />,
  Award: <Award size={18} />,
  Zap: <Zap size={18} />,
  CheckCircle2: <CheckCircle2 size={18} />,
};

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

      <Typography variant="h2" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.15, }}>{course.title}</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, fontSize: '1rem', lineHeight: 1.7 }}>{course.description}</Typography>

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} sx={{ mb: 5 }}>
        {/* Includes Section */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Zap size={20} color="#10b981" /> {copy.includesHeading}
          </Typography>
          <Stack spacing={1.5}>
            {copy.includes.map((item) => (
              <Stack key={item.icon} direction="row" alignItems="center" spacing={1.5}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}>{includeIconMap[item.icon]}</Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  {item.text.replace('{lessons}', String(totalLessons))}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Prerequisites Section */}
        {course.prerequisites && course.prerequisites.length > 0 && (
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <ListChecks size={20} color="#8b5cf6" /> {copy.prerequisitesHeading}
            </Typography>
            <Stack spacing={1.5}>
              {course.prerequisites.map((req, i) => (
                <Stack key={i} direction="row" alignItems="flex-start" spacing={1.5}>
                  <Box sx={{ color: 'warning.main', mt: 0.2 }}><AlertCircle size={18} /></Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                    {req}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        )}
      </Stack>

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
