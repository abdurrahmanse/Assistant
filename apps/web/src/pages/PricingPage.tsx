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
      <PricingHero title={pricing?.title} subtitle={pricing?.subtitle} isLoading={isLoading} />
      <PricingPlans tiers={pricing?.tiers} isLoading={isLoading} />
    </MarketingLayout>
  );
}
