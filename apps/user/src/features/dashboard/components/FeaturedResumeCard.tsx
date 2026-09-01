import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PlayCircle } from 'lucide-react';

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
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        p: 4,
        cursor: 'pointer',
        border: '1px solid',
        borderColor: 'rgba(0,0,0,0.1)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease',
        '&:hover': {
          transform: 'translateY(-8px) scale(1.01)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
          '& .play-button': {
            transform: 'scale(1.1)',
            bgcolor: 'primary.main',
            color: 'white',
          }
        },
        ...theme.applyStyles('dark', {
          borderColor: 'rgba(255,255,255,0.1)',
        })
      })}
      onClick={onClick}
    >
      {/* Background Image with Gradient Overlay */}
      <Box 
        sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0,
          backgroundImage: `url(${course.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Box 
        sx={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 2, color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box sx={{ flex: 1, pr: 4 }}>
          <Typography variant="overline" sx={{ fontWeight: 800, letterSpacing: '0.1em', color: 'primary.300', mb: 1, display: 'block' }}>
            JUMP BACK IN
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 900, letterSpacing: '-0.02em', mb: 2, lineHeight: 1.1 }}>
            {course.title}
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
            <Box sx={{ flexGrow: 1, height: 6, bgcolor: 'rgba(255,255,255,0.2)', borderRadius: 3, overflow: 'hidden' }}>
              <Box sx={{ height: '100%', width: `${course.progress}%`, bgcolor: 'primary.main', borderRadius: 3 }} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 700, color: 'rgba(255,255,255,0.8)' }}>
              {course.progress}%
            </Typography>
          </Box>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
            {course.completedLessons} of {course.totalLessons} lessons completed
          </Typography>
        </Box>

        <Box 
          className="play-button"
          sx={{
            width: 64, height: 64, borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.2)',
            backdropFilter: 'blur(10px)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            color: 'white',
            transition: 'all 0.3s ease',
            flexShrink: 0
          }}
        >
          <PlayCircle size={32} />
        </Box>
      </Box>
    </Box>
  );
}

