import CourseCatalog from '@/features/course/components/CourseCatalog';
import HomeFAQ from '@/features/home/components/HomeFAQ';
import HomeHero from '@/features/home/components/HomeHero';
import HomeHighlights from '@/features/home/components/HomeHighlights';
import HomeTestimonials from '@/features/home/components/HomeTestimonials';
import MarketingLayout from '@/layouts/MarketingLayout';
import Divider from '@mui/material/Divider';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <HomeHero />
      <div>
        <CourseCatalog />
        <Divider />
        <HomeTestimonials />
        <Divider />
        <HomeHighlights />
        <Divider />
        <HomeFAQ />
      </div>
    </MarketingLayout>
  );
}
