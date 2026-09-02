import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Badge as Chip } from '@repo/ui';
import Typography from '@mui/material/Typography';
import { Play, Code2, Brain, TrendingUp, MonitorPlay, BarChart, Star, Clock, Zap, Gift, Terminal } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { CourseItem } from '@repo/api-client';
import { alpha } from '@mui/material/styles';
import { brand } from '@repo/ui/shared-theme/themePrimitives';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={24} />,
  Brain: <Brain size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  MonitorPlay: <MonitorPlay size={24} />,
  BarChart: <BarChart size={24} />,
};

export interface CourseCardProps {
  course: CourseItem;
  enrollFreeLabel: string;
  enrollPremiumLabel: string;
}

export function CourseCard({ course, enrollFreeLabel, enrollPremiumLabel }: CourseCardProps) {
  const navigate = useNavigate();
  return (
    <Box onClick={() => navigate(`/courses/${course.slug || course.id}`)} sx={(theme) => ({
      height: '100%', display: 'flex', flexDirection: 'column',
      borderRadius: '16px', 
      border: '1px solid', 
      borderColor: alpha(theme.palette.divider, 0.5),
      bgcolor: theme.palette.background.paper,
      ...theme.applyStyles('dark', { borderColor: alpha(theme.palette.divider, 0.2), bgcolor: '#0b0f19' }),
      cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden',
      position: 'relative',
      boxShadow: `0 4px 20px rgba(0,0,0,0.05)`,
      '&::after': {
        content: '""', position: 'absolute', inset: 0,
        borderRadius: '16px', border: '1px solid transparent',
        transition: 'border-color 0.3s', pointerEvents: 'none'
      },
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: `0 12px 32px ${alpha(brand[500], 0.15)}`,
        '&::after': { borderColor: alpha(brand[400], 0.4) },
        '& .course-thumbnail': { opacity: 1 },
        '& .course-icon': { bgcolor: brand[500], color: '#fff' }
      }
    })}>
      <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', p: 1 }}>
        <Box sx={{ width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden', position: 'relative', bgcolor: '#0f172a' }}>
          {course.thumbnail ? (
            <Box component="img" src={course.thumbnail} alt={course.title} className="course-thumbnail" sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'opacity 0.4s ease' }} />
          ) : (
            <Box className="course-thumbnail" sx={{ width: '100%', height: '100%', background: course.gradient || `linear-gradient(135deg, ${brand[600]}, ${brand[900]})`, opacity: 0.85, transition: 'opacity 0.4s ease' }} />
          )}
        </Box>
        
        {/* Floating Tag */}
        <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 }}>
          <Chip icon={course.type === 'Free' ? <Gift size={12} style={{ color: '#10b981' }} /> : <Zap size={12} style={{ color: brand[400] }} />} label={course.type} size="small" sx={{ 
            fontWeight: 600, borderRadius: '6px', 
            bgcolor: 'rgba(15, 23, 42, 0.8)', color: '#fff',
            border: `1px solid rgba(255,255,255,0.1)`,
            backdropFilter: 'blur(8px)',
            textTransform: 'uppercase', letterSpacing: 0.5,
 fontSize: '0.65rem'
          }} />
        </Box>
        
        {/* Floating Icon */}
        <Box className="course-icon" sx={{ 
          position: 'absolute', bottom: -12, left: 24, p: 1.5, 
          borderRadius: '12px', bgcolor: 'background.paper', color: brand[500], 
          display: 'flex', border: '1px solid', borderColor: 'divider',
          boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
          transition: 'all 0.3s ease', zIndex: 2
        }}>
          {iconMap[course.icon] || <Terminal size={24} />}
        </Box>
      </Box>

      <Box sx={{ p: 3, pt: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, mb: 1 }}>
          {course.stack || course.level}
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.2, letterSpacing: '-0.02em' }}>{course.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontWeight: 400 }}>
          {course.description}
        </Typography>
        
        <Box sx={(theme) => ({ borderTop: '1px solid', borderColor: alpha(theme.palette.divider, 0.5), pt: 2, mt: 'auto' })}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={2}>
              {course.rating && (
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>{course.rating}</Typography>
                </Stack>
              )}
              {course.duration && (
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: 'text.secondary' }}>
                  <Clock size={16} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>{course.duration}</Typography>
                </Stack>
              )}
            </Stack>
            <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>{course.requiredTier || 'Pro Plan'}</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
export * from './skeleton';
