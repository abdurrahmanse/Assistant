import * as React from 'react';
import { PageSection } from '@/components/PageSection';
import MarketingLayout from '@/layouts/MarketingLayout';
import { NotFoundHero } from '@/features/not-found/components';

export default function NotFoundPage() {
  return (
    <MarketingLayout>
      <PageSection sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center', py: 10, position: 'relative' }}>
        <NotFoundHero />
      </PageSection>
    </MarketingLayout>
  );
}
