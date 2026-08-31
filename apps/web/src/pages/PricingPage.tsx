import Box from '@mui/material/Box';
import { Skeleton } from '@repo/ui';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import React from 'react';
import { usePricingQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import MarketingLayout from '@/layouts/MarketingLayout';
import { PricingHero } from '@/features/pricing/components/hero';
import { PricingPlans } from '@/features/pricing/components/plans';

export default function PricingPage(props: { disableCustomTheme?: boolean }) {
  const { data: pricing, isLoading } = usePricingQuery();

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <PricingHero title={pricing?.title} subtitle={pricing?.subtitle} />
            {isLoading || !pricing ? (
        <Container maxWidth="lg" sx={{ mb: 10 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
            <Skeleton variant="rectangular" width={240} height={56} sx={{ borderRadius: '30px' }} />
          </Box>
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {[1, 2, 3].map((i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Skeleton variant="rectangular" height={500} sx={{ borderRadius: 4 }} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <PricingPlans tiers={pricing.tiers} />
      )}
    </MarketingLayout>
  );
}
