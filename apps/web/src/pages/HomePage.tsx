import FAQ from '@/features/home/components/faq';
import FeaturedCourse from '@/features/home/components/featured';
import HomeHero from '@/features/home/components/hero';
import { TechMarquee } from '@/features/home/components/hero/TechMarquee';
import MarketingLayout from '@/layouts/MarketingLayout';


export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <HomeHero />
      <TechMarquee />
      <FeaturedCourse />
      <FAQ />

    </MarketingLayout>
  );
}
