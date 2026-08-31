import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { PlayCircle, CheckCircle2, ShieldCheck, Lock, BookOpen, Award, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import type { CourseItem } from '@repo/api-client';
import { useCourseDetailQuery, useSiteMetaQuery, usePricingQuery } from '@/features/landing/hooks/queries/useLandingQuery';

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
  const { data: siteMeta } = useSiteMetaQuery();
  const { data: pricing } = usePricingQuery();
  const navigate = useNavigate();
  const checkoutUrl = `${siteMeta?.portalUrl ?? 'http://localhost:5174'}/checkout`;
  return (
    <Box sx={{
      width: { xs: '100%', md: '400px' }, flexShrink: 0,
      borderRadius: '24px', 
      bgcolor: 'rgba(255,255,255,0.6)',
backdropFilter: 'blur(24px)',
      border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
'[data-mui-color-scheme="dark"] &': { bgcolor: 'rgba(20,20,25,0.6)', borderColor: 'rgba(255,255,255,0.1)' },
      overflow: 'hidden',
      boxShadow: '8px 8px 0px rgba(99,102,241,1)',
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
            <PlayCircle size={20} /> <Typography variant="caption" fontWeight={700}>{copy.ctaPreview}</Typography>
          </Box>
        )}
      </Box>

      <Box sx={{ p: 4 }}>
        {course.type === 'Free' ? (
          <>
            <Typography variant="h3" sx={{ fontWeight: 900, color: 'success.main', mb: 1 }}>
              {course.price}
            </Typography>
            <Button variant="contained" size="small" fullWidth endIcon={<ArrowRight size={20} />} href={checkoutUrl} sx={{ fontWeight: 900, py: 2, borderRadius: '14px', mb: 2, textTransform: 'none' }}>
              {copy.ctaFree}
            </Button>
          </>
        ) : (
          <Stack spacing={2} sx={{ mb: 3 }}>
            {/* Option 1: Subscription */}
            <Box sx={{ border: '2px solid', borderColor: 'primary.main', borderRadius: '16px', p: 2, bgcolor: 'rgba(99,102,241,0.05)', position: 'relative' }}>
              <Box sx={{ position: 'absolute', top: -12, right: 16, bgcolor: 'primary.main', color: 'white', px: 1.5, py: 0.5, borderRadius: 4, fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
                Best Value
              </Box>
              <Typography variant="caption" fontWeight={800} color="primary.main" textTransform="uppercase">All Access Pass</Typography>
              <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 0.5, mb: 1.5 }}>
                <Typography variant="h4" fontWeight={900}>{pricing?.tiers?.[1]?.price || '$199/yr'}</Typography>
              </Stack>
              <Button variant="contained" size="small" color="primary" fullWidth endIcon={<ArrowRight size={16} />} onClick={() => navigate('/pricing')} sx={{ fontWeight: 800, borderRadius: '10px' }}>
                Subscribe Annually
              </Button>
            </Box>

            {/* Option 2: Single Course */}
            <Box sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '16px', p: 2 }}>
              <Typography variant="caption" fontWeight={800} color="text.secondary" textTransform="uppercase">Course Only (Lifetime)</Typography>
              <Stack direction="row" alignItems="baseline" spacing={1} sx={{ mt: 0.5, mb: 1.5 }}>
                <Typography variant="h5" fontWeight={900}>{course.price}</Typography>
                <Typography variant="body2" color="text.disabled" sx={{ textDecoration: 'line-through' }}>{copy.originalPrice}</Typography>
              </Stack>
              <Button variant="outlined" size="small" fullWidth endIcon={<ArrowRight size={16} />} href={checkoutUrl} sx={{ fontWeight: 800, borderRadius: '10px' }}>
                Buy This Course
              </Button>
            </Box>
          </Stack>
        )}
        
        <Stack direction="row" justifyContent="center" spacing={2} sx={{ mb: 4 }}>
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: 'text.secondary' }}>
            <ShieldCheck size={16} /> <Typography variant="caption" fontWeight={600}>{copy.secureCheckoutLabel}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={0.5} sx={{ color: 'text.secondary' }}>
            <Lock size={16} /> <Typography variant="caption" fontWeight={600}>{copy.sslLabel}</Typography>
          </Stack>
        </Stack>
        

      </Box>
    </Box>
  );
}
