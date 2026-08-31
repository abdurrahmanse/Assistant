import { AboutHero } from '@/features/about/components/hero';
import { AboutStats } from '@/features/about/components/stats';
import HomeHighlights from '@/features/home/components/highlights';
import InstructorProfile from '@/features/home/components/instructor';
import HomeTestimonials from '@/features/home/components/testimonials';
import { useAboutQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import MarketingLayout from '@/layouts/MarketingLayout';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';


export default function AboutPage(props: { disableCustomTheme?: boolean }) {
  const { data: about, isLoading } = useAboutQuery();

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Container maxWidth="lg" sx={{ mb: 12, px: { xs: 0, sm: 2 } }}>
        <AboutHero hero={about?.hero} isLoading={isLoading} />
        <InstructorProfile />
        <AboutStats stats={about?.stats} isLoading={isLoading} />
        <HomeHighlights />

        <Divider sx={{ my: 4 }} />
        <HomeTestimonials />
      </Container>
    </MarketingLayout>
  );
}
