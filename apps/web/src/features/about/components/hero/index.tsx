import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export interface AboutHeroProps {
  hero: {
    title: string;
    subtitle: string;
  };
}

export function AboutHero({ hero }: AboutHeroProps) {
  return (
    <Box sx={{ textAlign: 'center', mb: 10 }}>
      <Typography variant="h1" sx={{ fontWeight: 900, mb: 3, fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, whiteSpace: 'pre-line' }}>
        {hero.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1.2rem', lineHeight: 1.7 }}>
        {hero.subtitle}
      </Typography>
    </Box>
  );
}

