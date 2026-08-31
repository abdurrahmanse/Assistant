import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
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
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
      <Footer />
    </AppTheme>
  );
}
