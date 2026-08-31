import { useSiteMetaQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Play, ShoppingBag } from 'lucide-react';
import { Skeleton } from '@repo/ui';
import { useNavigate } from 'react-router';

export interface CourseEnrollmentCardProps {
  course?: any;
  copy?: any;
  totalLessons?: number;
  isLoading?: boolean;
}

export function CourseEnrollmentCard({ course, copy, totalLessons, isLoading }: CourseEnrollmentCardProps) {
  const navigate = useNavigate();
  const { data: siteMeta } = useSiteMetaQuery();
  if (isLoading || !course || !copy) {
    return (
      <Box sx={{ width: { xs: '100%', md: '400px' }, flexShrink: 0 }}>
        <Box sx={(theme) => ({ 
          width: '100%', borderRadius: '24px', overflow: 'hidden', border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
          bgcolor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(24px)', ...theme.applyStyles('dark', { bgcolor: 'rgba(20,20,25,0.6)', borderColor: 'rgba(255,255,255,0.1)' })
        })}>
          <Skeleton variant="rectangular" sx={{ width: '100%', aspectRatio: '16/9' }} />
          <Box sx={{ p: 4 }}>
            <Skeleton variant="text" width="40%" height={48} sx={{ mb: 1 }} />
            <Skeleton variant="text" width="60%" height={20} sx={{ mb: 4 }} />
            <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: '12px', mb: 2 }} />
            <Skeleton variant="text" width="50%" height={20} sx={{ mx: 'auto' }} />
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={(theme) => ({ 
      width: '100%', 
      flexShrink: 0,
      bgcolor: 'rgba(255,255,255,0.6)', backdropFilter: 'blur(24px)',
      ...theme.applyStyles('dark', { bgcolor: 'rgba(20,20,25,0.6)', borderColor: 'rgba(255,255,255,0.1)' }),
      borderRadius: '24px',
      overflow: 'hidden',
      border: '2px solid',
      borderColor: 'rgba(0,0,0,0.1)',
      boxShadow: '8px 8px 0px rgba(99,102,241,1)',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '8px 12px 0px rgba(99,102,241,1)',
        borderColor: 'primary.main',
      }
    })}>
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
        
        <Button onClick={() => window.location.href = siteMeta?.portalUrl ? `${siteMeta.portalUrl}/checkout` : 'http://localhost:5174/checkout'} variant="primary" fullWidth size="large" startIcon={<ShoppingBag size={20} />} sx={{ py: 2, borderRadius: '12px', mb: 2, fontSize: '1.1rem' }}>
          {copy.enrollButton}
        </Button>
        <Typography variant="body2" color="text.secondary" textAlign="center">
          {copy.fullLifetimeAccess}
        </Typography>
      </Box>
    </Box>
  );
}
