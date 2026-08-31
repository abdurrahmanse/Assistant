import Divider from '@mui/material/Divider';
import Hero from '@/features/landing/components/Hero';
import CourseCatalog from '@/features/landing/components/CourseCatalog';
import Highlights from '@/features/landing/components/Highlights';
import Testimonials from '@/features/landing/components/Testimonials';
import FAQ from '@/features/landing/components/FAQ';
import MarketingLayout from '@/layouts/MarketingLayout';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Hero />
      <div>
        <CourseCatalog />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <FAQ />
      </div>
    </MarketingLayout>
  );
}
