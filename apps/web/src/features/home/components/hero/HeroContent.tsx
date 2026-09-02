import { Reveal } from '@/components/Reveal';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Badge as Chip } from '@repo/ui';
import { ArrowRight, Brain, Code2, Play, Cpu, Network, TrendingUp, X } from 'lucide-react';
import * as React from 'react';
import { useNavigate } from 'react-router';
import { brand } from '@repo/ui/shared-theme/themePrimitives';

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
            icon={<Cpu size={16} />}
            label={heroData.badge || "Advanced Analytics & ML"}
            color="primary"
            variant="outline"
            sx={{ fontWeight: 600, mb: 3, borderRadius: '6px', borderWidth: 1, letterSpacing: '0.05em' }}
          />
        </Reveal>

        <Reveal delay={0.2}>
          <Typography variant="h1" sx={{ fontWeight: 700, lineHeight: 1.1, mb: 3 }}>
            {heroData.titlePrefix} <br />
            <Typography component="span" variant="inherit" sx={{
              background: `linear-gradient(135deg, ${brand[400]}, ${brand[600]})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              display: 'inline-block'
            }}>
              {heroData.titleHighlight}
            </Typography>
            <Network size={40} color={brand[500]} style={{ verticalAlign: 'middle', marginLeft: '16px', transform: 'translateY(-6px)' }} />
          </Typography>
        </Reveal>

        <Reveal delay={0.3}>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1.125rem', lineHeight: 1.6, maxWidth: 520 }}>
            {heroData.subtitle}
          </Typography>
        </Reveal>

        <Reveal delay={0.4}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 4 }}>
            <Button
              variant="primary" size="large" endIcon={<ArrowRight size={18} />}
              onClick={() => navigate('/courses')}
              sx={{ fontWeight: 600, py: 1.5, px: 4, borderRadius: '8px', textTransform: 'none' }}
            >
              {heroData.startButton || "Start Learning"}
            </Button>
            <Button
              variant="outline" size="large" startIcon={<Play size={18} />} onClick={() => setVideoOpen(true)}
              sx={{ fontWeight: 600, py: 1.5, px: 4, borderRadius: '8px', textTransform: 'none', bgcolor: 'background.paper' }}
            >
              Watch Platform Demo
            </Button>
          </Stack>
        </Reveal>

        <Reveal delay={0.5}>
          <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
            {heroData.termsText}{' '}
            <Link href={heroData.termsLinkHref} color="primary" sx={{ fontWeight: 500 }}>
              {heroData.termsLinkText}
            </Link>
          </Typography>
        </Reveal>

        {/* Floating feature blocks */}
        <Stack direction="row" spacing={3} sx={{ mt: 8, display: { xs: 'none', sm: 'flex' } }}>
          {heroData.tracks?.slice(0, 2).map((track: any) => (
            <Box key={track.id} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ p: 1, borderRadius: 1.5, bgcolor: 'rgba(0, 168, 255, 0.1)', color: brand[500], display: 'flex', border: `1px solid rgba(0,168,255,0.2)` }}>
                {iconMap[track.icon] || <Brain size={20} />}
              </Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: '0.85rem' }}>
                {track.title}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Modal open={videoOpen} onClose={() => setVideoOpen(false)} closeAfterTransition>
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: '90vw', maxWidth: 1000, aspectRatio: '16/9', bgcolor: '#0f172a', borderRadius: '16px',
          boxShadow: '0 24px 64px rgba(0,0,0,0.4)', overflow: 'hidden', outline: 'none', border: '1px solid rgba(255,255,255,0.1)'
        }}>
          <IconButton onClick={() => setVideoOpen(false)} sx={{ position: 'absolute', top: 16, right: 16, color: 'white', bgcolor: 'rgba(255,255,255,0.1)', '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' }, zIndex: 10 }}>
            <X size={24} />
          </IconButton>
          <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#0b0f19' }}>
            <Box sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
              <Play size={64} style={{ marginBottom: 16, opacity: 0.5 }} />
              <Typography variant="h5" sx={{ fontWeight: 600 }}>Platform Demo Simulation</Typography>
              <Typography variant="body2" sx={{ mt: 2, color: brand[500] }}>Loading kernels...</Typography>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
