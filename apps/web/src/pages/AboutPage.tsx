import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import MarketingLayout from '@/layouts/MarketingLayout';
import { useAboutQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { AboutHero } from '@/features/about/components/hero';
import { AboutStats } from '@/features/about/components/stats';
import { AboutValues } from '@/features/about/components/values';
import InstructorProfile from '@/features/home/components/instructor';
import HomeHighlights from '@/features/home/components/highlights';
import HomeTestimonials from '@/features/home/components/testimonials';
import Divider from '@mui/material/Divider';


export default function AboutPage(props: { disableCustomTheme?: boolean }) {
  const { data: about, isLoading } = useAboutQuery();

  if (isLoading || !about) {
    return (
      <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
        <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, bgcolor: 'background.default' }}>
          
            <Skeleton variant="rectangular" width="60%" height={60} sx={{ mx: 'auto', mb: 3, borderRadius: 2 }} />
            <Skeleton variant="text" width="80%" sx={{ mx: 'auto', mb: 8 }} />
            <Grid container spacing={3} sx={{ mb: 12 }}>
              {[1, 2, 3, 4].map((i) => <Grid size={{ xs: 6, md: 3 }} key={i}><Skeleton variant="rectangular" height={100} sx={{ borderRadius: 3 }} /></Grid>)}
            </Grid>
            <Grid container spacing={3}>
              {[1, 2, 3, 4, 5, 6].map((i) => <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}><Skeleton variant="rectangular" height={160} sx={{ borderRadius: 3 }} /></Grid>)}
            </Grid>
          
        </Box>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, bgcolor: 'background.default' }}>
        
          <AboutHero hero={about.hero} />
          <AboutStats stats={about.stats} />
          <AboutValues 
            heading={about.valuesHeading} 
            subheading={about.valuesSubheading} 
            values={about.values} 
          />
          <InstructorProfile />
          <Divider sx={{ my: 8 }} />
          <HomeHighlights />
          <Divider sx={{ my: 8 }} />
          <HomeTestimonials />
        
      </Box>
    </MarketingLayout>
  );
}
