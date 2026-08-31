import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button } from '@repo/ui';
import Stack from '@mui/material/Stack';
import { Badge as Chip } from '@repo/ui';
import { Skeleton } from '@repo/ui';
import { Reveal } from '@/components/Reveal';
import { Play, Star, Clock, ArrowRight, ShieldCheck, CheckCircle2, Flame, Crown } from 'lucide-react';
import { useNavigate } from 'react-router';
import { useCoursesQuery, useSiteMetaQuery } from '@/features/landing/hooks/queries/useLandingQuery';

export default function FeaturedCourse() {
  const navigate = useNavigate();
  const { data, isLoading } = useCoursesQuery();
  const { data: siteMeta } = useSiteMetaQuery();

  if (isLoading || !data || data.items.length === 0) {
    return <Box sx={{ py: 12, px: 2 }}><Skeleton variant="rectangular" height={400} sx={{ borderRadius: 4, maxWidth: 1000, mx: 'auto' }} /></Box>;
  }

  // We only feature ONE course on the home page (the first one)
  const course = data.items[0];

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: 2 }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        
        <Reveal delay={0.1}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Chip icon={<Flame size={16} />}
          label="Latest Release" color="primary" sx={{ fontWeight: 900, borderRadius: '8px', border: '2px solid #000', boxShadow: '2px 2px 0px #000', mb: 3 }} />
          <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: '-0.02em', mb: 2 }}><Crown size={40} color="#f59e0b" style={{ verticalAlign: 'middle', marginRight: '16px', transform: 'translateY(-4px)' }} />{siteMeta?.featuredLabel || 'Flagship Program'}</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 500 }}>
            Master the most requested skills on the market right now.
          </Typography>
        </Box>
        </Reveal>

        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left: Huge Video/Thumbnail */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{
              position: 'relative', borderRadius: '32px', overflow: 'hidden',
              boxShadow: '8px 8px 0px rgba(99,102,241,1)',
              border: '2px solid', borderColor: 'rgba(0,0,0,0.1)', '[data-mui-color-scheme="dark"] &': { borderColor: 'rgba(255,255,255,0.1)' },
              aspectRatio: '4/3', bgcolor: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              {course.previewVideo ? (
                <video autoPlay muted loop playsInline poster={course.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={course.previewVideo} type="video/mp4" />
                </video>
              ) : (
                <Box component="img" src={course.thumbnail} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}
              
              <Box sx={{
                  position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3,
                  width: { xs: 80, md: 100 }, aspectRatio: '1', borderRadius: '50%', bgcolor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(12px)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.8)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)', cursor: 'pointer',
                  transition: 'transform 0.2s', '&:hover': { transform: 'translate(-50%, -50%) scale(1.1)' }
                }}
                onClick={() => navigate(`/courses/${course.slug || course.id}`)}
              >
                <Play size={40} fill="currentColor" style={{ marginLeft: '6px' }} />
              </Box>
            </Box>
          </Grid>

          {/* Right: Details */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="overline" color="primary.main" fontWeight={900} letterSpacing={2} sx={{ display: 'block', mb: 1 }}>
              {course.stack}
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              {course.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.7 }}>
              {course.description}
            </Typography>

            <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Star size={20} fill="#f59e0b" color="#f59e0b" />
                <Typography variant="subtitle1" fontWeight={800}>{course.rating} Rating</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} color="text.secondary">
                <Clock size={20} />
                <Typography variant="subtitle1" fontWeight={700}>{course.duration}</Typography>
              </Stack>
            </Stack>

            <Stack spacing={2} sx={{ mb: 6 }}>
              {['Build production-ready applications', 'Direct feedback and code reviews', 'Lifetime access & updates'].map((item, i) => (
                <Stack key={i} direction="row" alignItems="center" spacing={2}>
                  <CheckCircle2 size={20} color="#10b981" />
                  <Typography variant="body2" fontWeight={600}>{item}</Typography>
                </Stack>
              ))}
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
              <Button 
                variant="primary" size="small" onClick={() => navigate(`/courses/${course.slug || course.id}`)}
                endIcon={<ArrowRight size={20} />}
                sx={{ 
                  fontWeight: 900, py: 2, px: 6, borderRadius: '16px',
                  border: '2px solid #000', boxShadow: '4px 4px 0px #000',
                  '&:hover': { transform: 'translateY(-2px)', boxShadow: '6px 6px 0px #000' }
                }}
              >
                View Full Curriculum
              </Button>
              <Typography variant="h4" fontWeight={900} sx={{ ml: { sm: 'auto !important' } }}>
                {course.price}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
