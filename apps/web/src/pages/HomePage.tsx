import MarketingLayout from '@/layouts/MarketingLayout';
import HomeHero from '@/features/home/components/hero';
import FeaturedCourse from '@/features/home/components/featured';
import HowItWorks from '@/features/home/components/how-it-works';
import InstructorProfile from '@/features/home/components/instructor';
import Testimonials from '@/features/home/components/testimonials';
import FAQ from '@/features/home/components/faq';
import { NewsletterSection } from '@/features/landing/components/newsletter';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <HomeHero />
      <HowItWorks />
      <FeaturedCourse />
      <InstructorProfile />
      <Testimonials />
      <FAQ />
      <NewsletterSection />
    </MarketingLayout>
  );
}
