import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, Play, Code2, Brain, TrendingUp, Sparkles, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Brain: <Brain size={20} />,
  TrendingUp: <TrendingUp size={20} />,
};

interface HeroContentProps {
  heroData: any;
}

export function HeroContent({ heroData }: HeroContentProps) {
  const navigate = useNavigate();

  return (
    <Box>
      <Chip
        icon={<Sparkles size={16} />}
        label={heroData.badge}
        color="primary"
        variant="outlined"
        sx={{ fontWeight: 800, mb: 3, borderRadius: '8px', borderWidth: 2 }}
      />
      
      <Typography variant="h1" sx={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.1, mb: 3, letterSpacing: '-0.02em' }}>
        {heroData.titlePrefix} <br />
        <Typography component="span" variant="inherit" sx={{
          color: 'primary.main', position: 'relative',
          '&::after': {
            content: '""', position: 'absolute', bottom: '8%', left: 0, right: 0,
            height: '25%', bgcolor: 'primary.main', opacity: 0.2, zIndex: -1, borderRadius: 1,
          },
        }}>
          {heroData.titleHighlight}
        </Typography>
        <Rocket size={48} color="var(--template-palette-primary-main)" style={{ verticalAlign: 'middle', marginLeft: '12px', transform: 'translateY(-8px) rotate(15deg)' }} />
      </Typography>

      <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1.1rem', lineHeight: 1.6, maxWidth: 480 }}>
        {heroData.subtitle}
      </Typography>

      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
        <Button
          variant="contained" size="large" endIcon={<ArrowRight size={20} />}
          onClick={() => navigate('/courses')}
          sx={{ fontWeight: 800, py: 1.75, px: 4, borderRadius: '12px', textTransform: 'none', fontSize: '1rem' }}
        >
          {heroData.startButton}
        </Button>
        <Button
          variant="outlined" size="large" startIcon={<Play size={20} />} href="#courses"
          sx={{ fontWeight: 700, py: 1.75, px: 4, borderRadius: '12px', textTransform: 'none', fontSize: '1rem', bgcolor: 'background.paper' }}
        >
          Browse Tracks
        </Button>
      </Stack>

      <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
        {heroData.termsText}{' '}
        <Link href={heroData.termsLinkHref} color="primary" sx={{ fontWeight: 600 }}>
          {heroData.termsLinkText}
        </Link>
      </Typography>

      {/* Floating feature blocks */}
      <Stack direction="row" spacing={3} sx={{ mt: 8, display: { xs: 'none', sm: 'flex' } }}>
        {heroData.tracks.slice(0, 2).map((track: any) => (
          <Box key={track.id} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Box sx={{ p: 1, borderRadius: 2, bgcolor: 'primary.main', color: 'primary.contrastText', display: 'flex' }}>
              {iconMap[track.icon]}
            </Box>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
              {track.title}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
