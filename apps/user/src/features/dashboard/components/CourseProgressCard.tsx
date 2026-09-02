import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Badge as Chip } from '@repo/ui';
import { CheckCircle2, Play, PlayCircle, Terminal } from 'lucide-react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

import type { EnrolledCourse } from '@/interfaces';

interface CourseProgressCardProps {
  course: EnrolledCourse;
  onClick: () => void;
}

export function CourseProgressCard({ course, onClick }: CourseProgressCardProps) {
  const isCompleted = course.progress === 100;
  
  return (
    <Box 
      onClick={onClick} 
      sx={(theme) => ({
        height: '100%', display: 'flex', flexDirection: 'column',
        borderRadius: '16px', 
        border: '1px solid', 
        borderColor: alpha(theme.palette.divider, 0.5),
        bgcolor: theme.palette.background.paper,
        ...theme.applyStyles('dark', { 
          borderColor: alpha(theme.palette.divider, 0.2), 
          bgcolor: '#0b0f19' 
        }),
        cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', overflow: 'hidden',
        position: 'relative',
        boxShadow: `0 4px 20px rgba(0,0,0,0.05)`,
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 12px 32px ${alpha(brand[500], 0.15)}`,
          borderColor: alpha(brand[400], 0.4),
          '& .course-thumbnail': { opacity: 1 },
          '& .course-icon': { bgcolor: brand[500], color: '#fff' }
        }
    })}>
      
      <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', p: 1 }}>
        <Box sx={{ width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden', position: 'relative', bgcolor: '#0f172a' }}>
          <Box component="img" src={course.thumbnail} alt={course.title} className="course-thumbnail" sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, transition: 'opacity 0.4s ease' }} />
        </Box>
        
        {/* Progress Badge */}
        <Box sx={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 1 }}>
          <Chip 
            icon={isCompleted ? <CheckCircle2 size={14} style={{ color: '#10b981' }} /> : <PlayCircle size={14} style={{ color: brand[400] }} />} 
            label={isCompleted ? 'Completed' : 'In Progress'} 
            size="small" 
            sx={{ 
              fontWeight: 600, borderRadius: '6px', 
              bgcolor: 'rgba(15, 23, 42, 0.8)', color: '#fff',
              border: `1px solid rgba(255,255,255,0.1)`,
              backdropFilter: 'blur(8px)',
              textTransform: 'uppercase', letterSpacing: 0.5,
              fontSize: '0.65rem'
            }} 
          />
        </Box>
        
        {/* Floating Icon */}
        <Box className="course-icon" sx={{ 
          position: 'absolute', bottom: -12, left: 24, p: 1.5, 
          borderRadius: '12px', bgcolor: 'background.paper', color: brand[500], 
          display: 'flex', border: '1px solid', borderColor: 'divider',
          boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
          transition: 'all 0.3s ease', zIndex: 2
        }}>
          <Terminal size={20} />
        </Box>
      </Box>

      <Box sx={{ p: 3, pt: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, mb: 1 }}>
          {course.instructor}
        </Typography>
        
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1.5, lineHeight: 1.2, letterSpacing: '-0.02em' }}>{course.title}</Typography>
        
        <Box sx={{ mt: 'auto', mb: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
            <Typography variant="body2" fontWeight={700} color={isCompleted ? 'success.main' : 'primary.main'}>
              {course.progress}%
            </Typography>
            <Typography variant="caption" color="text.secondary" fontWeight={500}>
              {course.completedLessons} / {course.totalLessons} lessons
            </Typography>
          </Stack>
          <LinearProgress 
            variant="determinate" 
            value={course.progress} 
            color={isCompleted ? 'success' : 'primary'}
            sx={{ height: 6, borderRadius: 3, bgcolor: 'divider', '& .MuiLinearProgress-bar': { borderRadius: 3 } }}
          />
        </Box>

        <Button 
          variant={isCompleted ? "outline" : "primary"} 
          fullWidth
        >
          {isCompleted ? 'Review Analytics' : (course.progress === 0 ? 'Initialize Sandbox' : 'Resume Execution')}
        </Button>
      </Box>
    </Box>
  );
}
