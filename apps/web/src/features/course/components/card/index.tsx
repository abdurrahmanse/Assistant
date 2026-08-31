import * as React from 'react';
import Box from '@mui/material/Box';
import Tilt from 'react-parallax-tilt';
import Stack from '@mui/material/Stack';
import { Badge as Chip } from '@repo/ui';
import Typography from '@mui/material/Typography';
import { Play, Code2, Brain, TrendingUp, MonitorPlay, BarChart, Star, Clock, Zap, Gift } from 'lucide-react';
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
    <Box onClick={() => navigate(`/courses/${course.slug || course.id}`)} sx={{
      height: '100%', display: 'flex', flexDirection: 'column',
      borderRadius: '24px', 
      border: '2px solid', 
      borderColor: 'rgba(0,0,0,0.1)',
bgcolor: 'rgba(255,255,255,0.6)',
'[data-mui-color-scheme="dark"] &': { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' },
      backdropFilter: 'blur(24px)',
      cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', overflow: 'hidden',
      position: 'relative',
      '&:hover': {
        transform: 'translateY(-8px) rotate(-1deg)',
        boxShadow: '8px 8px 0px rgba(99,102,241,1)',
        borderColor: 'primary.main',
        '& .course-thumbnail': { transform: 'scale(1.08) rotate(1deg)' },
        '& .course-icon': { transform: 'scale(1.1) translateY(-4px)' }
      },
    }}>
      <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', p: 1.5 }}>
        <Box sx={{ width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
          {course.thumbnail ? (
            <Box component="img" src={course.thumbnail} alt={course.title} className="course-thumbnail" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
          ) : (
            <Box className="course-thumbnail" sx={{ width: '100%', height: '100%', background: course.gradient || 'linear-gradient(135deg,#667eea,#764ba2)', transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
          )}
        </Box>
        
        {/* Playful Neo-Brutalist Badge */}
        <Box sx={{ position: 'absolute', top: 24, right: 24, display: 'flex', gap: 1 }}>
          <Chip icon={course.type === 'Free' ? <Gift size={14} style={{ color: '#000' }} /> : <Zap size={14} style={{ color: '#000' }} />} label={course.type} size="small" sx={{ 
            fontWeight: 900, borderRadius: '8px', 
            bgcolor: course.type === 'Free' ? '#10b981' : '#f59e0b', color: '#000',
            border: '2px solid #000', boxShadow: '2px 2px 0px #000',
            textTransform: 'uppercase', letterSpacing: 0.5
          }} />
        </Box>
        
        {/* Playful Floating Icon */}
        <Box className="course-icon" sx={{ 
          position: 'absolute', bottom: -8, left: 24, p: 1.5, 
          borderRadius: '16px', bgcolor: 'primary.main', color: 'primary.contrastText', 
          display: 'flex', border: '2px solid #000', boxShadow: '4px 4px 0px #000',
          transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}>
          {iconMap[course.icon] || <Play size={24} />}
        </Box>
      </Box>

      <Box sx={{ p: 3, pt: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, mb: 1 }}>
          {course.stack || course.level}
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, lineHeight: 1.2, letterSpacing: '-0.02em' }}>{course.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontWeight: 500 }}>
          {course.description}
        </Typography>
        
        <Box sx={{ borderTop: '2px dashed', borderColor: 'rgba(0,0,0,0.1)', '[data-mui-color-scheme="dark"] &': { borderColor: 'rgba(255,255,255,0.1)' }, pt: 2, mt: 'auto' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={2}>
              {course.rating && (
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Star size={16} fill="#f59e0b" color="#f59e0b" />
                  <Typography variant="subtitle2" sx={{ fontWeight: 800 }}>{course.rating}</Typography>
                </Stack>
              )}
              {course.duration && (
                <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: 'text.secondary' }}>
                  <Clock size={16} />
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>{course.duration}</Typography>
                </Stack>
              )}
            </Stack>
            <Typography variant="h6" sx={{ fontWeight: 900, color: 'text.primary' }}>{course.price}</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
