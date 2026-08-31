import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@repo/ui';
import { Reveal } from '@/components/Reveal';
import { Code2, MessageCircle, Layers, Compass } from 'lucide-react';
import { useHowItWorksQuery } from '@/features/landing/hooks/queries/useLandingQuery';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 size={32} />,
  MessageCircle: <MessageCircle size={32} />,
  Layers: <Layers size={32} />,
};

export default function HowItWorks() {
  const { data: howItWorks, isLoading } = useHowItWorksQuery();

  if (isLoading || !howItWorks) {
    return (
      <Box sx={{ py: { xs: 6, md: 8 }, px: 2 }}>
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Skeleton variant="rectangular" width="40%" height={48} sx={{ mx: 'auto', mb: 2, borderRadius: 2 }} />
            <Skeleton variant="text" width="60%" height={32} sx={{ mx: 'auto' }} />
          </Box>
          <Grid container spacing={{ xs: 6, md: 4 }}>
            {[1, 2, 3].map((i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Box sx={{ p: { xs: 4, md: 5 }, height: '100%', borderRadius: '24px', border: '2px solid', borderColor: 'divider' }}>
                  <Skeleton variant="rectangular" width={64} height={64} sx={{ borderRadius: '16px', mb: 4 }} />
                  <Skeleton variant="text" width="80%" height={32} sx={{ mb: 2 }} />
                  <Skeleton variant="text" width="100%" height={24} sx={{ mb: 1 }} />
                  <Skeleton variant="text" width="90%" height={24} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: 2, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        
        <Reveal delay={0.1}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: '-0.02em', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}><Compass size={40} color="#10b981" /> {howItWorks.heading}</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 500 }}>
            {howItWorks.subheading}
          </Typography>
        </Box>
        </Reveal>

        <Grid container spacing={{ xs: 6, md: 4 }}>
          {howItWorks.steps.map((step: any) => (
            <Grid size={{ xs: 12, md: 4 }} key={step.title}>
              <Box sx={{ 
                p: { xs: 4, md: 5 }, height: '100%',
                borderRadius: '24px', border: '2px solid', borderColor: 'divider',
                position: 'relative',
                transition: 'transform 0.3s', '&:hover': { transform: 'translateY(-6px)', borderColor: 'primary.main', boxShadow: '6px 6px 0px rgba(99,102,241,0.5)' }
              }}>
                <Box sx={{ 
                  width: 64, height: 64, borderRadius: '16px', mb: 4,
                  bgcolor: 'primary.main', color: 'primary.contrastText',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '2px solid #000', boxShadow: '4px 4px 0px #000'
                }}>
                  {iconMap[step.icon] || <Code2 size={32} />}
                </Box>
                <Typography variant="h5" fontWeight={900} sx={{ mb: 2 }}>{step.title}</Typography>
                <Typography variant="body1" color="text.secondary" fontWeight={500} lineHeight={1.7}>
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        
      </Box>
    </Box>
  );
}
