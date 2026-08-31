import Container from '@mui/material/Container';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Reveal } from '@/components/Reveal';
import { Newspaper } from 'lucide-react';

export function BlogHero() {
  return (
    <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, textAlign: 'center' }}>
      <Container maxWidth="lg">
      <Reveal delay={0.1}>
        <Typography variant="h1" sx={{ fontWeight: 900, fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1.1, mb: 3, letterSpacing: '-0.02em' }}>
          Engineering <Box component="span" sx={{ color: 'primary.main' }}>Insights</Box>
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1rem', lineHeight: 1.6, mb: 6 }}>
          Deep dives into modern web architecture, performance optimization, and scalable systems.
        </Typography>
      </Reveal>
    </Container>
    </Box>
  );
}
