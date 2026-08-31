import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Handshake } from 'lucide-react';
import { Skeleton } from '@repo/ui';

export interface ContactHeroProps {
  heading?: string;
  subheading?: string;
  isLoading?: boolean;
}

export function ContactHero({ heading, subheading, isLoading }: ContactHeroProps) {
  if (isLoading || !heading) {
    return (
      <Box sx={{ mb: { xs: 4, md: 6 } }}>
        <Skeleton width="40%" height={80} sx={{ mb: 2 }} />
        <Skeleton width="60%" height={32} />
      </Box>
    );
  }

  return (
    <Box sx={{ mb: { xs: 4, md: 6 } }}>
      <Typography variant="h1" sx={{ fontWeight: 900, letterSpacing: '-0.03em', mb: 3 }}>
        <Handshake size={64} color="var(--template-palette-primary-main)" style={{ verticalAlign: 'middle', marginRight: '16px', transform: 'translateY(-8px) rotate(-10deg)' }} />
        {heading}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600, fontWeight: 400, fontSize: '1rem', lineHeight: 1.6 }}>
        {subheading}
      </Typography>
    </Box>
  );
}
