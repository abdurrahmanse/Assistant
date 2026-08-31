import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { Play, Code2, Brain, TrendingUp, MonitorPlay, BarChart, Star, Clock } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { CourseItem } from '@repo/api-client';

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
    <Box onClick={() => navigate(`/courses/${course.id}`)} sx={{
      height: '100%', display: 'flex', flexDirection: 'column',
      borderRadius: '20px', border: '1px solid', borderColor: 'divider',
      bgcolor: 'background.paper', cursor: 'pointer', transition: 'all 0.25s ease', overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-6px)',
        boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 20px 60px rgba(0,0,0,0.6)' : '0 20px 60px rgba(0,0,0,0.12)',
        borderColor: 'primary.main',
        '& .course-thumbnail': { transform: 'scale(1.05)' }
      },
    }}>
      <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
        {course.thumbnail ? (
          <Box component="img" src={course.thumbnail} alt={course.title} className="course-thumbnail" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} />
        ) : (
          <Box sx={{ width: '100%', height: '100%', background: course.gradient || 'linear-gradient(135deg,#667eea,#764ba2)' }} />
        )}
        <Box sx={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 1 }}>
          <Chip label={course.type} color={course.type === 'Free' ? 'success' : 'primary'} size="small" sx={{ fontWeight: 800, borderRadius: '6px', backdropFilter: 'blur(4px)' }} />
        </Box>
        <Box sx={{ position: 'absolute', bottom: -16, left: 16, p: 1, borderRadius: '12px', bgcolor: 'background.paper', color: 'primary.main', display: 'flex', boxShadow: 2, border: '1px solid', borderColor: 'divider' }}>
          {iconMap[course.icon] || <Play size={24} />}
        </Box>
      </Box>

      <Box sx={{ p: 3, pt: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
          <Typography variant="caption" sx={{ color: 'text.disabled', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>
            {course.stack || course.level}
          </Typography>
        </Stack>
        
        <Typography variant="h6" sx={{ fontWeight: 800, mb: 1, lineHeight: 1.25 }}>{course.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {course.description}
        </Typography>
        
        <Box sx={{ borderTop: '1px solid', borderColor: 'divider', pt: 2, mt: 'auto' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
            <Stack direction="row" spacing={1.5}>
              {course.rating && (
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Star size={14} fill="#f59e0b" color="#f59e0b" />
                  <Typography variant="caption" sx={{ fontWeight: 700 }}>{course.rating}</Typography>
                </Stack>
              )}
              {course.duration && (
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: 'text.secondary' }}>
                  <Clock size={14} />
                  <Typography variant="caption">{course.duration}</Typography>
                </Stack>
              )}
            </Stack>
            <Typography variant="h6" sx={{ fontWeight: 900, color: course.type === 'Free' ? 'success.main' : 'text.primary' }}>{course.price}</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
