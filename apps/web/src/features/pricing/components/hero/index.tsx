import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface PricingHeroProps {
  title?: string;
  subtitle?: string;
}

export function PricingHero({ title, subtitle }: PricingHeroProps) {
  return (
    <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, textAlign: 'center' }}>
      <Container maxWidth="lg">
      <Typography variant="h1" sx={{ fontWeight: 900, mb: 3, lineHeight: 1.1 }}>
        {title || 'Pricing'}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1rem', lineHeight: 1.7 }}>
        {subtitle || 'Choose a plan that fits your needs.'}
      </Typography>
    </Container>
    </Box>
  );
}
