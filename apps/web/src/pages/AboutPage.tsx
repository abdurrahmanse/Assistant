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

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 } }}>
        <Container maxWidth="lg">
          <AboutHero hero={about?.hero} isLoading={isLoading} />
          <AboutStats stats={about?.stats} isLoading={isLoading} />
        </Container>
      </Box>

      <Box sx={{ pb: { xs: 8, sm: 12 } }}>
        <InstructorProfile />
      </Box>

      <Divider sx={{ my: 4 }} />
      <HomeHighlights />

      <Divider sx={{ my: 4 }} />
      <HomeTestimonials />
    </MarketingLayout>
  );
}
