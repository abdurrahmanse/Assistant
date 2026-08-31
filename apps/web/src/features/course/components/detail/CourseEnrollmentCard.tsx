import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { PlayCircle, CheckCircle2, ShieldCheck, Lock, BookOpen, Award, Zap } from 'lucide-react';
import type { CourseItem } from '@repo/api-client';
import { useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';

const includeIconMap: Record<string, React.ReactNode> = {
  PlayCircle: <PlayCircle size={16} />,
  BookOpen: <BookOpen size={16} />,
  Award: <Award size={16} />,
  Zap: <Zap size={16} />,
  CheckCircle2: <CheckCircle2 size={16} />,
};

export interface CourseEnrollmentCardProps {
  course: CourseItem;
  copy: NonNullable<ReturnType<typeof useCourseDetailQuery>['data']>;
  totalLessons: number;
}

export function CourseEnrollmentCard({ course, copy, totalLessons }: CourseEnrollmentCardProps) {
  return (
    <Box sx={{
      width: { xs: '100%', md: '400px' }, flexShrink: 0,
      borderRadius: '24px', bgcolor: 'background.paper',
      border: '1px solid', borderColor: 'divider', overflow: 'hidden',
      boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 30px 80px rgba(0,0,0,0.6)' : '0 30px 80px rgba(0,0,0,0.1)',
    }}>
      <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', bgcolor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {course.previewVideo ? (
          <video controls poster={course.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src={course.previewVideo} type="video/mp4" />
          </video>
        ) : course.thumbnail ? (
          <Box component="img" src={course.thumbnail} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <Box sx={{ width: '100%', height: '100%', background: course.gradient }} />
        )}
        {!course.previewVideo && (
          <Box sx={{ position: 'absolute', zIndex: 2, display: 'flex', alignItems: 'center', gap: 1, p: 1, pr: 2, borderRadius: '99px', bgcolor: 'rgba(0,0,0,0.6)', color: 'white', backdropFilter: 'blur(8px)' }}>
            <PlayCircle size={20} /> <Typography variant="caption" fontWeight={700}>Preview Course</Typography>
          </Box>
        )}
      </Box>

      <Box sx={{ p: 4 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 900, color: course.type === 'Free' ? 'success.main' : 'text.primary' }}>
            {course.price}
          </Typography>
          {course.type !== 'Free' && <Typography variant="h6" color="text.disabled" sx={{ textDecoration: 'line-through' }}>$1,999</Typography>}
        </Stack>
        <Typography variant="body2" color="error.main" sx={{ mb: 3, fontWeight: 700 }}>
          Ends soon! Limited time offer.
        </Typography>
        
        <Button variant="contained" size="large" fullWidth sx={{ fontWeight: 900, py: 2, borderRadius: '14px', mb: 2, textTransform: 'none', fontSize: '1.1rem' }}>
          {course.type === 'Free' ? copy.ctaFree : copy.ctaPremium}
        </Button>
        
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 4 }}>
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: 'text.secondary' }}>
            <ShieldCheck size={16} /> <Typography variant="caption" fontWeight={600}>Secure checkout</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: 'text.secondary' }}>
            <Lock size={16} /> <Typography variant="caption" fontWeight={600}>SSL Encrypted</Typography>
          </Stack>
        </Stack>
        
        <Divider sx={{ mb: 3 }} />
        <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>{copy.includesHeading}</Typography>
        <Stack spacing={2}>
          {copy.includes.map((item) => (
            <Stack key={item.icon} direction="row" alignItems="flex-start" spacing={2}>
              <Box sx={{ color: 'primary.main', mt: 0.2 }}>{includeIconMap[item.icon]}</Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                {item.text.replace('{lessons}', String(totalLessons))}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
