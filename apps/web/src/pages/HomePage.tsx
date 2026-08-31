import Divider from '@mui/material/Divider';
import Hero from '@/features/landing/components/Hero';
import LogoCollection from '@/features/landing/components/LogoCollection';
import Highlights from '@/features/landing/components/Highlights';
import Pricing from '@/features/landing/components/Pricing';
import Features from '@/features/landing/components/Features';
import Testimonials from '@/features/landing/components/Testimonials';
import FAQ from '@/features/landing/components/FAQ';
import MarketingLayout from '@/layouts/MarketingLayout';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
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
      </div>
    </MarketingLayout>
  );
}
