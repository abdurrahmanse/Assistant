import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Play } from 'lucide-react';
import { Skeleton } from '@repo/ui';

export interface CourseEnrollmentCardProps {
  course?: any;
  copy?: any;
  totalLessons?: number;
  isLoading?: boolean;
}

export function CourseEnrollmentCard({ course, copy, totalLessons, isLoading }: CourseEnrollmentCardProps) {
  if (isLoading || !course || !copy) {
    return (
      <Box sx={{ width: { xs: '100%', md: '400px' }, flexShrink: 0 }}>
        <Skeleton variant="rectangular" width="100%" height={600} sx={{ borderRadius: '24px' }} />
      </Box>
    );
  }

  return (
    <Box sx={{ 
      width: { xs: '100%', md: '400px' }, 
      flexShrink: 0,
      bgcolor: 'background.paper',
      borderRadius: '24px',
      overflow: 'hidden',
      border: '1px solid',
      borderColor: 'divider',
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)'
    }}>
      {/* Video Preview Area */}
      <Box sx={{ position: 'relative', aspectRatio: '16/9', bgcolor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {course.previewVideo ? (
          <video autoPlay muted loop playsInline poster={course.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}>
            <source src={course.previewVideo} type="video/mp4" />
          </video>
        ) : (
          <Box component="img" src={course.thumbnail} sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
        )}
        <Box sx={{
          position: 'absolute', zIndex: 2,
          width: 64, height: 64, borderRadius: '50%',
          bgcolor: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', border: '2px solid rgba(255,255,255,0.8)',
          cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' }
        }}>
          <Play size={24} fill="currentColor" style={{ marginLeft: '4px' }} />
        </Box>
      </Box>

      {/* Pricing & CTA */}
      <Box sx={{ p: 4 }}>
        <Typography variant="h3" fontWeight={900} mb={1}>{course.price}</Typography>
        <Typography variant="body2" color="text.secondary" mb={4}>{copy.moneyBackGuarantee}</Typography>
        
        <Button variant="primary" fullWidth size="large" sx={{ py: 2, borderRadius: '12px', mb: 2, fontSize: '1.1rem' }}>
          {copy.enrollButton}
        </Button>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {copy.fullLifetimeAccess}
        </Typography>
      </Box>
    </Box>
  );
}
