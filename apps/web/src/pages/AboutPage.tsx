import Container from '@mui/material/Container';
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@repo/ui';
import MarketingLayout from '@/layouts/MarketingLayout';
import { useAboutQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { AboutHero } from '@/features/about/components/hero';
import { AboutStats } from '@/features/about/components/stats';
import InstructorProfile from '@/features/home/components/instructor';
import HomeHighlights from '@/features/home/components/highlights';
import HomeTestimonials from '@/features/home/components/testimonials';
import Divider from '@mui/material/Divider';


export default function AboutPage(props: { disableCustomTheme?: boolean }) {
  const { data: about, isLoading } = useAboutQuery();

  if (isLoading || !about) {
    return (
      <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
        <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, }}>
        <Container maxWidth="lg">
          
            <Box sx={{ textAlign: 'center', mb: 10 }}>
              <Skeleton variant="rectangular" width="40%" height={60} sx={{ mx: 'auto', mb: 3, borderRadius: 2 }} />
              <Skeleton variant="text" width="60%" height={30} sx={{ mx: 'auto' }} />
            </Box>
            
            <Grid container spacing={3} sx={{ mb: 12 }}>
              {[1, 2, 3, 4].map((i) => (
                <Grid size={{ xs: 6, md: 3 }} key={i}>
                  <Skeleton variant="rectangular" height={160} sx={{ borderRadius: '24px' }} />
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={6} sx={{ mb: 6 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <Skeleton variant="rectangular" height={400} sx={{ borderRadius: '24px' }} />
              </Grid>
              <Grid size={{ xs: 12, md: 7 }}>
                <Skeleton variant="rectangular" width="40%" height={40} sx={{ mb: 4, borderRadius: 2 }} />
                <Skeleton variant="text" height={24} sx={{ mb: 2 }} />
                <Skeleton variant="text" height={24} sx={{ mb: 2 }} />
                <Skeleton variant="text" height={24} sx={{ mb: 4 }} />
                
                <Grid container spacing={2}>
                  {[1, 2, 3, 4].map((i) => (
                    <Grid size={{ xs: 12, sm: 6 }} key={i}>
                      <Skeleton variant="rectangular" height={80} sx={{ borderRadius: 2 }} />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
        </Container>
          
        </Box>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, }}>
        <Container maxWidth="lg">
        
          <AboutHero hero={about.hero} />
          <AboutStats stats={about.stats} />
          <InstructorProfile />
          <Divider sx={{ my: 4 }} />
          <HomeHighlights />
          <Divider sx={{ my: 4 }} />
          <HomeTestimonials />
        </Container>
        
      </Box>
    </MarketingLayout>
  );
}
