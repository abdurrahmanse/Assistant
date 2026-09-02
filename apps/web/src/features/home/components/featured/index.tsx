import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Badge as Chip } from '@repo/ui';
import { Skeleton } from '@repo/ui';
import { Reveal } from '@/components/Reveal';
import { Play, Star, Clock, ArrowRight, ShieldCheck, CheckCircle2, FlaskConical, Target } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useCoursesQuery, useSiteMetaQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export default function FeaturedCourse() {
  const navigate = useNavigate();
  const { data, isLoading } = useCoursesQuery();
  const { data: siteMeta } = useSiteMetaQuery();

  if (isLoading || !data || data.items.length === 0) {
    return (
      <Box sx={{ py: { xs: 6, md: 8 }, px: 2 }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Skeleton variant="rectangular" width={140} height={32} sx={{ mx: 'auto', mb: 3, borderRadius: '8px' }} />
            <Skeleton variant="text" width="60%" height={48} sx={{ mx: 'auto', mb: 2 }} />
            <Skeleton variant="text" width="40%" height={24} sx={{ mx: 'auto' }} />
          </Box>
          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <Skeleton variant="rectangular" sx={{ width: '100%', aspectRatio: '4/3', borderRadius: '16px' }} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Skeleton variant="text" width="20%" height={20} sx={{ mb: 1 }} />
              <Skeleton variant="text" width="80%" height={48} sx={{ mb: 2 }} />
              <Skeleton variant="text" width="100%" height={24} />
              <Skeleton variant="text" width="100%" height={24} sx={{ mb: 4 }} />
              <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
                <Skeleton variant="rectangular" width={100} height={24} sx={{ borderRadius: 1 }} />
                <Skeleton variant="rectangular" width={100} height={24} sx={{ borderRadius: 1 }} />
              </Stack>
              <Stack spacing={2} sx={{ mb: 6 }}>
                {[1, 2, 3].map((i) => <Skeleton key={i} variant="rectangular" width="60%" height={24} sx={{ borderRadius: 1 }} />)}
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
                <Skeleton variant="rectangular" width={220} height={56} sx={{ borderRadius: '8px' }} />
                <Skeleton variant="rectangular" width={100} height={40} sx={{ ml: { sm: 'auto !important' }, borderRadius: 1 }} />
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    );
  }

  const course = data.items[0];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: 2 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        
        <Reveal delay={0.1}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
          <Chip icon={<FlaskConical size={16} />}
          label="Featured Pathway" color="primary" sx={{ fontWeight: 600, borderRadius: '6px', border: `1px solid ${brand[500]}`, mb: 3, bgcolor: alpha(brand[500], 0.1), color: brand[500] }} />
          <Typography variant="h2" sx={{ fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}><Target size={40} color={brand[400]} style={{ verticalAlign: 'middle', marginRight: '16px', transform: 'translateY(-4px)' }} />{siteMeta?.featuredLabel || 'Flagship Program'}</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
            Master the most requested skills on the market right now.
          </Typography>
        </Box>
        </Reveal>

        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={(theme) => ({
              position: 'relative', borderRadius: '16px', overflow: 'hidden',
              boxShadow: `0 24px 64px ${alpha(brand[500], 0.15)}`,
              border: '1px solid', borderColor: theme.palette.divider, 
              aspectRatio: '4/3', bgcolor: '#0b0f19', display: 'flex', alignItems: 'center', justifyContent: 'center',
              '&::after': { content: '""', position: 'absolute', inset: 0, border: `1px solid ${alpha(brand[400], 0.2)}`, borderRadius: '16px', pointerEvents: 'none' }
            })}>
              {course.previewVideo ? (
                <video autoPlay muted loop playsInline poster={course.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}>
                  <source src={course.previewVideo} type="video/mp4" />
                </video>
              ) : (
                <Box component="img" src={course.thumbnail} sx={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }} />
              )}
              
              <Box sx={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3,
                  width: { xs: 80, md: 100 }, aspectRatio: '1', borderRadius: '50%', bgcolor: alpha(brand[500], 0.2), backdropFilter: 'blur(12px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: brand[400],
                  border: `1px solid ${alpha(brand[400], 0.5)}`, boxShadow: `0 8px 32px ${alpha(brand[500], 0.2)}`, cursor: 'pointer',
                  transition: 'transform 0.2s, background 0.2s', '&:hover': { transform: 'translate(-50%, -50%) scale(1.05)', bgcolor: alpha(brand[500], 0.3) }
                }}
                onClick={() => navigate(`/courses/${course.slug || course.id}`)}
              >
                <Play size={40} fill="currentColor" style={{ marginLeft: '6px' }} />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" color="primary.main" fontWeight={600} letterSpacing={2} sx={{ display: 'block', mb: 1 }}>
              {course.stack}
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {course.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
              {course.description}
            </Typography>

            <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Star size={20} fill="#f59e0b" color="#f59e0b" />
                <Typography variant="subtitle1" fontWeight={600} >{course.rating} Score</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} color="text.secondary">
                <Clock size={20} />
                <Typography variant="subtitle1" fontWeight={600} >{course.duration}</Typography>
              </Stack>
            </Stack>

            <Stack spacing={2} sx={{ mb: 6 }}>
              {['Build production-ready machine learning pipelines', 'Direct feedback and code reviews', 'Lifetime access to updated notebooks'].map((item, i) => (
                <Stack key={i} direction="row" alignItems="center" spacing={2}>
                  <CheckCircle2 size={20} color={brand[500]} />
                  <Typography variant="body2" fontWeight={500} >{item}</Typography>
                </Stack>
              ))}
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <Box 
                component="button"
                onClick={() => navigate(`/courses/${course.slug || course.id}`)}
                sx={{ 
                  display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer',
                  fontWeight: 600, py: 1.5, px: 4, borderRadius: '8px',
                  border: 'none', background: `linear-gradient(135deg, ${brand[400]}, ${brand[600]})`, color: '#fff',
                  boxShadow: `0 4px 14px ${alpha(brand[500], 0.4)}`, transition: 'all 0.2s',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: `0 6px 20px ${alpha(brand[500], 0.6)}` }
                }}
              >
                View Full Curriculum
                <ArrowRight size={18} />
              </Box>
              <Typography variant="h5" fontWeight={600} sx={{ ml: { sm: 'auto !important' }, color: 'text.secondary' }}>
                {course.requiredTier || 'Pro Plan'}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
