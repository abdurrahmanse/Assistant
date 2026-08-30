import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import SEO from '@/components/SEO';

import AppAppBar from '@/layouts/AppAppBar';
import Hero from '@/features/landing/components/Hero';
import LogoCollection from '@/features/landing/components/LogoCollection';
import Highlights from '@/features/landing/components/Highlights';
import Pricing from '@/features/landing/components/Pricing';
import Features from '@/features/landing/components/Features';
import Testimonials from '@/features/landing/components/Testimonials';
import FAQ from '@/features/landing/components/FAQ';
import Footer from '@/layouts/Footer';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SEO />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
