import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import { useHeroQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { HeroContent } from './HeroContent';
import { HeroMedia } from './HeroMedia';

export default function HomeHero() {
  const { data: heroData, isLoading } = useHeroQuery();

  if (isLoading || !heroData) {
    return (
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Skeleton width={180} height={32} sx={{ mb: 3, borderRadius: 2 }} />
            <Skeleton width="100%" height={80} sx={{ mb: 2 }} />
            <Skeleton width="80%" height={80} sx={{ mb: 3 }} />
            <Skeleton width="90%" height={24} sx={{ mb: 6 }} />
            <Skeleton width={300} height={56} sx={{ borderRadius: 2 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: 4 }} />
          </Grid>
        </Grid>
      </Box>
    );
  }

  return (
    <Box id="hero" sx={{ position: 'relative', pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden' }}>
      {/* Background decoration */}
      <Box sx={{
        position: 'absolute', top: '-20%', right: '-10%', width: '50%', height: '80%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <Box sx={{
        position: 'absolute', bottom: '-10%', left: '-10%', width: '40%', height: '60%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <HeroContent heroData={heroData} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <HeroMedia media={heroData.media} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
