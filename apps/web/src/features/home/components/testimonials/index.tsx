import CardHeader from '@mui/material/CardHeader';

import { Reveal } from '@/components/Reveal';
import { useLandingQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useColorScheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { CardContent, Skeleton } from '@repo/ui';
import { MutedText } from '@repo/ui/styled';
import { MessageSquareQuote, Quote } from 'lucide-react';
import {
  CardFooterBox,
  StyledGridItem,
  TestimonialCard,
  TestimonialsContainer,
  TestimonialsHeader,
} from './styles';

// Moved from static files:
const darkModeLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg',
];

const lightModeLogos = [
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg',
  'https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg',
];

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const { mode, systemMode } = useColorScheme();
  const { data, isLoading } = useLandingQuery();

  let logos;
  if (mode === 'system') {
    if (systemMode === 'light') {
      logos = lightModeLogos;
    } else {
      logos = darkModeLogos;
    }
  } else if (mode === 'light') {
    logos = lightModeLogos;
  } else {
    logos = darkModeLogos;
  }

  if (isLoading || !data) {
    return (
      <TestimonialsContainer id="testimonials">

        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Skeleton variant="rectangular" width="40%" height={48} sx={{ mx: 'auto', mb: 3, borderRadius: 2 }} />
          <Skeleton variant="text" width="60%" height={24} sx={{ mx: 'auto' }} />
        </Box>
        <Grid container spacing={3} sx={{ width: '100%' }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Skeleton variant="rectangular" width="100%" height={280} sx={{ borderRadius: '24px' }} />
            </Grid>
          ))}
        </Grid>

      </TestimonialsContainer>
    );
  }

  const { testimonials } = data;

  return (
    <TestimonialsContainer id="testimonials">

      <Reveal delay={0.1}>
        <TestimonialsHeader>
          <Typography component="h2" variant="h2" gutterBottom sx={{ color: 'text.primary', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
            <MessageSquareQuote size={40} color="#6366f1" /> {testimonials.title}
          </Typography>
          <MutedText variant="body1">
            {testimonials.subtitle}
          </MutedText>
        </TestimonialsHeader>
      </Reveal>
      <Grid container spacing={2}>
        {testimonials.items.map((testimonial, index) => (
          <StyledGridItem size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <Reveal delay={0.2 + (index * 0.1)} direction="up">
              <TestimonialCard variant="outlined">
                <CardContent>
                  <Box sx={{ mb: 2 }}><Quote size={24} color="#ec4899" opacity={0.5} /></Box>
                  <MutedText variant="body1" gutterBottom>
                    {testimonial.testimonial}
                  </MutedText>
                </CardContent>
                <CardFooterBox>
                  <CardHeader
                    avatar={<Avatar alt={testimonial.name} src={testimonial.avatarSrc} />}
                    title={testimonial.name}
                    subheader={testimonial.occupation}
                  />
                  <img src={logos[index % logos.length]} alt={`Logo ${index + 1}`} style={logoStyle} />
                </CardFooterBox>
              </TestimonialCard>
            </Reveal>
          </StyledGridItem>
        ))}
      </Grid>
    </TestimonialsContainer>
  );
}
