import { useHeroQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { ArrowRight, Brain, Code2, Play, TrendingUp } from 'lucide-react';
import * as React from 'react';
import { useNavigate } from 'react-router';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={20} />,
  Brain: <Brain size={20} />,
  TrendingUp: <TrendingUp size={20} />,
};

export default function Hero() {
  const { data: heroData, isLoading } = useHeroQuery();
  const navigate = useNavigate();

  if (isLoading || !heroData) {
    return (
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Skeleton width={180} height={32} sx={{ mb: 3, borderRadius: 2 }} />
            <Skeleton width="100%" height={80} sx={{ mb: 2 }} />
            <Skeleton width="80%" height={80} sx={{ mb: 3 }} />
            <Skeleton width="90%" height={24} sx={{ mb: 6 }} />
            <Skeleton width={300} height={56} sx={{ borderRadius: 2 }} />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Skeleton variant="rectangular" width="100%" height={400} sx={{ borderRadius: 4 }} />
          </Grid>
        </Grid>

      </Box>
    );
  }

  return (
    <Box id="hero" sx={{ position: 'relative', pt: { xs: 16, md: 24 }, pb: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden' }}>
      {/* Background decoration */}
      <Box sx={{
        position: 'absolute', top: '-20%', right: '-10%', width: '50%', height: '80%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />
      <Box sx={{
        position: 'absolute', bottom: '-10%', left: '-10%', width: '40%', height: '60%',
        background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Column: Text & CTA */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Chip
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
              {heroData.tracks.slice(0, 2).map((track) => (
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
          </Grid>

          {/* Right Column: Video/Media Preview */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{
              position: 'relative', borderRadius: '24px', overflow: 'hidden',
              boxShadow: (theme) => theme.palette.mode === 'dark' ? '0 30px 80px rgba(0,0,0,0.6)' : '0 30px 80px rgba(0,0,0,0.1)',
              border: '1px solid', borderColor: 'divider', aspectRatio: '4/3',
              bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center',
              '&::before': { content: '""', position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))', zIndex: 2, pointerEvents: 'none' }
            }}>
              {heroData.media?.type === 'video' ? (
                <video autoPlay muted loop playsInline poster={heroData.media.poster} style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
                  <source src={heroData.media.url} type="video/mp4" />
                </video>
              ) : (
                <Box component="img" src={heroData.media?.url || heroData.media?.poster} alt="Platform Preview" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              )}

              {/* Play Button Overlay (purely visual) */}
              <Box sx={{
                position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 3,
                width: 80, height: 80, borderRadius: '50%', bgcolor: 'rgba(255, 255, 255, 0.2)', backdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.4)', boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
              }}>
                <Play size={40} fill="currentColor" style={{ marginLeft: '4px' }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
