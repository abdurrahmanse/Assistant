import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PlayCircle, Terminal } from 'lucide-react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface FeaturedResumeCardProps {
  course: {
    title: string;
    thumbnail: string;
    progress: number;
    completedLessons: number;
    totalLessons: number;
  };
  onClick: () => void;
}

export function FeaturedResumeCard({ course, onClick }: FeaturedResumeCardProps) {
  return (
    <Box 
      sx={(theme) => ({
        position: 'relative',
        height: '100%',
        minHeight: 280,
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        cursor: 'pointer',
        border: '1px solid',
        borderColor: alpha(theme.palette.divider, 0.5),
        boxShadow: `0 8px 32px rgba(0,0,0,0.1)`,
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: `0 16px 40px ${alpha(brand[500], 0.2)}`,
          borderColor: alpha(brand[400], 0.5),
          '& .play-button': {
            transform: 'scale(1.1)',
            bgcolor: brand[500],
            color: 'white',
          },
          '& .bg-image': {
            opacity: 0.9,
            transform: 'scale(1.02)'
          }
        },
        ...theme.applyStyles('dark', {
          borderColor: alpha(theme.palette.divider, 0.2),
          boxShadow: `0 8px 32px rgba(0,0,0,0.5)`,
        })
      })}
      onClick={onClick}
    >
      <Box 
        className="bg-image"
        sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0,
          backgroundImage: `url(${course.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          transition: 'transform 2s ease, opacity 0.5s ease',
        }}
      />
      <Box 
        sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1,
          background: `linear-gradient(to top, #0f172a 0%, rgba(15,23,42,0.6) 50%, rgba(15,23,42,0.1) 100%)`,
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 2, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box sx={{ flex: 1, pr: 4 }}>
          <Typography variant="overline" sx={{ fontWeight: 600, letterSpacing: '0.1em', color: brand[400], mb: 1, display: 'block' }}>
            ACTIVE KERNEL / RESUME
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, letterSpacing: '-0.02em', mb: 2, lineHeight: 1.1 }}>
            {course.title}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Box sx={{ flexGrow: 1, height: 6, bgcolor: 'rgba(255,255,255,0.1)', borderRadius: 3, overflow: 'hidden' }}>
              <Box sx={{ height: '100%', width: `${course.progress}%`, bgcolor: brand[500], borderRadius: 3, boxShadow: `0 0 10px ${brand[500]}` }} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600, color: brand[300] }}>
              {course.progress}%
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
            {course.completedLessons} of {course.totalLessons} execution steps completed
          </Typography>
        </Box>

        <Box 
          className="play-button"
          sx={{
            width: 64, height: 64, borderRadius: '16px',
            bgcolor: 'rgba(255,255,255,0.1)',
            border: `1px solid rgba(255,255,255,0.2)`,
            backdropFilter: 'blur(10px)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            color: 'white',
            transition: 'all 0.3s ease',
            flexShrink: 0
          }}
        >
          <Terminal size={28} />
        </Box>
      </Box>
    </Box>
  );
}
