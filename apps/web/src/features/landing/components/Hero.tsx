import * as React from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Mail, Rocket, Code2, Brain, TrendingUp, ArrowRight } from "lucide-react";
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import { VisuallyHidden, GradientText } from '@repo/ui/styled';
import {
  HeroWrapper,
  HeroContainer,
  HeroContentStack,
  HeroTitle,
  HeroSubtitle,
  EmailFormStack,
  TracksContainer,
  TrackCard,
  TrackIconWrapper,
} from './Hero.styles';
import { useLandingQuery } from '../hooks/queries/useLandingQuery';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={32} />,
  Brain: <Brain size={32} />,
  TrendingUp: <TrendingUp size={32} />,
};

export default function Hero() {
  const { data, isLoading } = useLandingQuery();

  if (isLoading || !data) {
    return (
      <HeroWrapper id="hero">
        <HeroContainer>
          <Skeleton variant="rectangular" width="60%" height={80} sx={{ mb: 2 }} />
          <Skeleton variant="text" width="80%" height={40} />
          <Skeleton variant="text" width="70%" height={40} sx={{ mb: 4 }} />
        </HeroContainer>
      </HeroWrapper>
    );
  }

  const { hero } = data;

  return (
    <HeroWrapper id="hero">
      <HeroContainer>
        <HeroContentStack spacing={3} useFlexGap>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', px: 2, py: 0.5, borderRadius: '99px', bgcolor: 'primary.main', color: 'primary.contrastText', opacity: 0.9, mb: 2 }}>
            <Rocket size={14} />
            <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase' }}>
              Launch Your Tech Career Today
            </Typography>
          </Box>
          <HeroTitle variant="h1" sx={{ textAlign: 'center' }}>
            {hero.titlePrefix}&nbsp;
            <GradientText component="span" variant="h1" sx={{ fontSize: 'inherit' }}>
              {hero.titleHighlight}
            </GradientText>
          </HeroTitle>
          <HeroSubtitle sx={{ fontSize: { xs: '1.1rem', md: '1.25rem' }, lineHeight: 1.6 }}>
            {hero.subtitle}
          </HeroSubtitle>
          <EmailFormStack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap sx={{ mt: 2, width: { xs: '100%', sm: 'auto' }, minWidth: { sm: '400px' } }}>
            <InputLabel htmlFor="email-hero">
              <VisuallyHidden>Email</VisuallyHidden>
            </InputLabel>
            <TextField
              id="email-hero"
              InputProps={{ startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> }}
              hiddenLabel
              size="medium"
              variant="outlined"
              aria-label={hero.emailPlaceholder}
              placeholder={hero.emailPlaceholder}
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': hero.emailPlaceholder,
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ minWidth: 'fit-content', fontWeight: 600, px: 4 }}
              endIcon={<ArrowRight size={18} />}
            >
              {hero.startButton}
            </Button>
          </EmailFormStack>
          <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center', mt: 1 }}>
            {hero.termsText}&nbsp;
            <Link href={hero.termsLinkHref} color="primary" sx={{ fontWeight: 600 }}>
              {hero.termsLinkText}
            </Link>
            .
          </Typography>
        </HeroContentStack>

        <TracksContainer>
          {hero.tracks?.map((track) => (
            <TrackCard key={track.id}>
              <TrackIconWrapper>
                {iconMap[track.icon] || <Code2 size={32} />}
              </TrackIconWrapper>
              <Typography variant="h6" sx={{ fontWeight: 700, textAlign: 'center' }}>
                {track.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                {track.description}
              </Typography>
            </TrackCard>
          ))}
        </TracksContainer>
      </HeroContainer>
    </HeroWrapper>
  );
}
