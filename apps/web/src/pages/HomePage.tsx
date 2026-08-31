import MarketingLayout from '@/layouts/MarketingLayout';
import HomeHero from '@/features/home/components/hero';
import { TechMarquee } from '@/features/home/components/hero/TechMarquee';
import FeaturedCourse from '@/features/home/components/featured';
import HowItWorks from '@/features/home/components/how-it-works';
import InstructorProfile from '@/features/home/components/instructor';
import Testimonials from '@/features/home/components/testimonials';
import FAQ from '@/features/home/components/faq';


export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <HomeHero />
      <TechMarquee />
      <HowItWorks />
      <FeaturedCourse />
      <InstructorProfile />
      <Testimonials />
      <FAQ />
      
    </MarketingLayout>
  );
}
