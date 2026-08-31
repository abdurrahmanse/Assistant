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
      <Box sx={{ pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 } }}>
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
    <Box id="hero" sx={{ position: 'relative', pt: { xs: 8, md: 12 }, pb: { xs: 4, md: 6 }, overflow: 'hidden' }}>
      {/* Background decoration */}


      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <HeroContent heroData={heroData} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <HeroMedia heroData={heroData as any} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
