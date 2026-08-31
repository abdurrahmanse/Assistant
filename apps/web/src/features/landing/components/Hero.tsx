import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Mail, Rocket } from "lucide-react";
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { VisuallyHidden, GradientText } from '@repo/ui/styled';
import {
  HeroWrapper,
  HeroContainer,
  HeroContentStack,
  HeroTitle,
  HeroSubtitle,
  EmailFormStack,
} from './Hero.styles';
import { useLandingQuery } from '../hooks/queries/useLandingQuery';

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
        <HeroContentStack spacing={2} useFlexGap>
          <HeroTitle variant="h1">
            {hero.titlePrefix}&nbsp;
            <GradientText component="span" variant="h1" sx={{ fontSize: 'inherit' }}>
              {hero.titleHighlight}
            </GradientText>
          </HeroTitle>
          <HeroSubtitle>
            {hero.subtitle}
          </HeroSubtitle>
          <EmailFormStack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap>
            <InputLabel htmlFor="email-hero">
              <VisuallyHidden>Email</VisuallyHidden>
            </InputLabel>
            <TextField
              id="email-hero"
              InputProps={{ startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> }}
              hiddenLabel
              size="small"
              variant="outlined"
              aria-label="Enter your email address"
              placeholder="Your email address"
              fullWidth
              slotProps={{
                htmlInput: {
                  autoComplete: 'off',
                  'aria-label': 'Enter your email address',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ minWidth: 'fit-content' }}
              startIcon={<Rocket size={18} />}
            >
              Start now
            </Button>
          </EmailFormStack>
          <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
            {hero.termsText}&nbsp;
            <Link href={hero.termsLinkHref} color="primary">
              {hero.termsLinkText}
            </Link>
            .
          </Typography>
        </HeroContentStack>
      </HeroContainer>
    </HeroWrapper>
  );
}
