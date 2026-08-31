import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Skeleton } from '@repo/ui';

export interface AboutHeroProps {
  hero?: {
    title: string;
    subtitle: string;
  };
  isLoading?: boolean;
}

export function AboutHero({ hero, isLoading }: AboutHeroProps) {
  if (isLoading || !hero) {
    return (
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Skeleton variant="rectangular" width="40%" height={60} sx={{ mx: 'auto', mb: 3, borderRadius: 2 }} />
        <Skeleton variant="text" width="60%" height={30} sx={{ mx: 'auto' }} />
      </Box>
    );
  }

  return (
    <Box sx={{ textAlign: 'center', mb: 10 }}>
      <Typography variant="h1" sx={{ fontWeight: 900, mb: 3, lineHeight: 1.1, whiteSpace: 'pre-line' }}>
        {hero.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1rem', lineHeight: 1.7 }}>
        {hero.subtitle}
      </Typography>
    </Box>
  );
}
