import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MarketingLayout from '@/layouts/MarketingLayout';
import { NewsletterSection } from '@/features/landing/components/newsletter';
import { Reveal } from '@/components/Reveal';

export default function NewsletterPage() {
  return (
    <MarketingLayout>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, textAlign: 'center' }}>
        <Reveal delay={0.1}>
          <Typography variant="h1" sx={{ fontWeight: 900, fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1.1, mb: 3, letterSpacing: '-0.02em' }}>
            Level Up Your <Box component="span" sx={{ color: 'primary.main' }}>Inbox</Box>
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1rem', lineHeight: 1.6, mb: 6 }}>
            Join thousands of developers leveling up their careers.
          </Typography>
        </Reveal>
      </Box>

      <NewsletterSection />
      
    </MarketingLayout>
  );
}
