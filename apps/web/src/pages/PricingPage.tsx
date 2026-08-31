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
      {!isLoading && pricing && <PricingPlans tiers={pricing.tiers} />}
    </MarketingLayout>
  );
}
