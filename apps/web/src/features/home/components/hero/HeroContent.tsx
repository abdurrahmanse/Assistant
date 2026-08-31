import { Reveal } from '@/components/Reveal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Badge as Chip } from '@repo/ui';
import { ArrowRight, Brain, Code2, Play, Rocket, Sparkles, TrendingUp, X } from 'lucide-react';
import * as React from 'react';
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
  const [videoOpen, setVideoOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Box>
        <Reveal delay={0.1}>
          <Chip
            icon={<Sparkles size={16} />}
            label={heroData.badge}
            color="primary"
            variant="outline"
            sx={{ fontWeight: 800, mb: 3, borderRadius: '8px', borderWidth: 2 }}
          />
        </Reveal>

        <Reveal delay={0.2}>
          <Typography variant="h1" sx={{ fontWeight: 900, lineHeight: 1.1, mb: 3, letterSpacing: '-0.02em' }}>
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
        </Reveal>

        <Reveal delay={0.3}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1rem', lineHeight: 1.6, maxWidth: 480 }}>
            {heroData.subtitle}
          </Typography>
        </Reveal>

        <Reveal delay={0.4}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <Button
              variant="primary" size="large" endIcon={<ArrowRight size={20} />}
              onClick={() => navigate('/courses')}
              sx={{ fontWeight: 800, py: 1.75, px: 4, borderRadius: '12px', textTransform: 'none' }}
            >
              {heroData.startButton}
            </Button>
            <Button
              variant="outline" size="large" startIcon={<Play size={20} />} onClick={() => setVideoOpen(true)}
              sx={{ fontWeight: 700, py: 1.75, px: 4, borderRadius: '12px', textTransform: 'none', bgcolor: 'background.paper' }}
            >
              Watch Trailer
            </Button>
          </Stack>
        </Reveal>

        <Reveal delay={0.5}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
            {heroData.termsText}{' '}
            <Link href={heroData.termsLinkHref} color="primary" sx={{ fontWeight: 600 }}>
              {heroData.termsLinkText}
            </Link>
          </Typography>
        </Reveal>

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

      <Modal open={videoOpen} onClose={() => setVideoOpen(false)} closeAfterTransition>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '90vw', maxWidth: 1000, aspectRatio: '16/9', bgcolor: 'black', borderRadius: '24px',
          boxShadow: 24, overflow: 'hidden', outline: 'none'
        }}>
          <IconButton onClick={() => setVideoOpen(false)} sx={{ position: 'absolute', top: 16, right: 16, color: 'white', bgcolor: 'rgba(0,0,0,0.5)', '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }, zIndex: 10 }}>
            <X size={24} />
          </IconButton>
          <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#111' }}>
            {/* Fake video placeholder */}
            <Box sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
              <Play size={64} style={{ marginBottom: 16, opacity: 0.5 }} />
              <Typography variant="h5" fontWeight={800}>Cinematic Trailer goes here</Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
