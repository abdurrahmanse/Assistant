import React from 'react';
import { useMembershipQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import MarketingLayout from '@/layouts/MarketingLayout';
import { MembershipHero } from '@/features/membership/components/hero';
import { MembershipPlans } from '@/features/membership/components/plans';

export default function MembershipPage(props: { disableCustomTheme?: boolean }) {
  const { data: membership, isLoading } = useMembershipQuery();

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <MembershipHero title={membership?.title} subtitle={membership?.subtitle} isLoading={isLoading} />
      <MembershipPlans tiers={membership?.tiers} isLoading={isLoading} />
    </MarketingLayout>
  );
}
