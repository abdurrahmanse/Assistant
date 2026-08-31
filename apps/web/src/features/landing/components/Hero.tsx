import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { Mail, Rocket } from "lucide-react";
import Typography from '@mui/material/Typography';
import { VisuallyHidden, GradientText } from '@repo/ui/styled';
import {
  HeroWrapper,
  HeroContainer,
  HeroContentStack,
  HeroTitle,
  HeroSubtitle,
  EmailFormStack,
} from './Hero.styles';

export default function Hero() {
  return (
    <HeroWrapper id="hero">
      <HeroContainer>
        <HeroContentStack spacing={2} useFlexGap>
          <HeroTitle variant="h1">
            Our&nbsp;latest&nbsp;
            <GradientText component="span" variant="h1" sx={{ fontSize: 'inherit' }}>
              products
            </GradientText>
          </HeroTitle>
          <HeroSubtitle>
            Explore our cutting-edge dashboard, delivering high-quality solutions
            tailored to your needs. Elevate your experience with top-tier features
            and services.
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
            By clicking &quot;Start now&quot; you agree to our&nbsp;
            <Link href="#" color="primary">
              Terms & Conditions
            </Link>
            .
          </Typography>
        </HeroContentStack>
      </HeroContainer>
    </HeroWrapper>
  );
}
