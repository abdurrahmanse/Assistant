import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Badge as Chip } from '@repo/ui';
import { Skeleton } from '@repo/ui';
import { Sparkles } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

export interface MembershipHeroProps {
  title?: string;
  subtitle?: string;
  isLoading?: boolean;
}

export function MembershipHero({ title, subtitle, isLoading }: MembershipHeroProps) {
  if (isLoading || !title) {
    return (
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, textAlign: 'center', position: 'relative' }}>
        <Container maxWidth="lg">
          <Skeleton variant="rectangular" width={120} height={32} sx={{ mx: 'auto', mb: 3, borderRadius: '16px' }} />
          <Skeleton variant="rectangular" width="60%" height={60} sx={{ mx: 'auto', mb: 3, borderRadius: 2 }} />
          <Skeleton variant="text" width="40%" height={30} sx={{ mx: 'auto' }} />
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <Box sx={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translate(-50%, -50%)',
        width: { xs: 300, md: 600 }, aspectRatio: '1',
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Reveal delay={0.1}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Chip 
              icon={<Sparkles size={16} />} 
              label="Members Only" 
              color="primary" 
              variant="outline" 
              sx={{ fontWeight: 800, px: 1, py: 2.5, borderRadius: '20px', border: '2px solid' }} 
            />
          </Box>
          <Typography variant="h1" sx={(theme) => ({ 
            fontWeight: 900, mb: 3, lineHeight: 1.1, fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            color: 'text.primary',
            letterSpacing: '-0.02em'
          })}>
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680, mx: 'auto', fontSize: '1.25rem', lineHeight: 1.6, fontWeight: 500 }}>
            {subtitle}
          </Typography>
        </Reveal>
      </Container>
    </Box>
  );
}
