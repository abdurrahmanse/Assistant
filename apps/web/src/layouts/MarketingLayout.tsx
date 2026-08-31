import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import AppAppBar from '@/layouts/AppAppBar';
import Footer from '@/layouts/Footer';
import SEO from '@/components/SEO';

interface MarketingLayoutProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
}

export default function MarketingLayout({ children, disableCustomTheme }: MarketingLayoutProps) {
  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <CssBaseline enableColorScheme />
      <SEO />
      <AppAppBar />
      <main>
        {children}
      </main>
      <Footer />
    </AppTheme>
  );
}
