import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@repo/ui';
import { Reveal } from '@/components/Reveal';
import { Code2, MessageCircle, Layers, Compass, BrainCircuit } from 'lucide-react';
import { useHowItWorksQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

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
                <Box sx={{ p: { xs: 4, md: 5 }, height: '100%', borderRadius: '16px', border: '1px solid', borderColor: 'divider' }}>
                  <Skeleton variant="rectangular" width={64} height={64} sx={{ borderRadius: '12px', mb: 4 }} />
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
    <Box sx={{ py: { xs: 6, md: 10 }, px: 2, borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
        
        <Reveal delay={0.1}>
        <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontWeight: 700, letterSpacing: '-0.02em', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}><BrainCircuit size={40} color={brand[500]} /> {howItWorks.heading}</Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', fontWeight: 400 }}>
            {howItWorks.subheading}
          </Typography>
        </Box>
        </Reveal>

        <Grid container spacing={{ xs: 4, md: 4 }}>
          {howItWorks.steps.map((step: any, index: number) => (
            <Grid size={{ xs: 12, md: 4 }} key={step.title}>
              <Box sx={{ 
                p: { xs: 4, md: 5 }, height: '100%',
                borderRadius: '16px', border: '1px solid', borderColor: 'divider',
                position: 'relative', bgcolor: 'background.paper',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)', 
                boxShadow: `0 4px 20px rgba(0,0,0,0.02)`,
                '&:hover': { transform: 'translateY(-6px)', borderColor: alpha(brand[400], 0.5), boxShadow: `0 12px 32px ${alpha(brand[500], 0.1)}` }
              }}>
                <Box sx={{ 
                  width: 64, height: 64, borderRadius: '12px', mb: 4,
                  bgcolor: alpha(brand[500], 0.1), color: brand[500],
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1px solid ${alpha(brand[500], 0.2)}`,
                  boxShadow: `0 4px 12px ${alpha(brand[500], 0.1)}`
                }}>
                  {iconMap[step.icon] || <Code2 size={32} />}
                </Box>
                
                {/* Connecting Line for desktop */}
                {index < howItWorks.steps.length - 1 && (
                  <Box sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    top: 56, right: -40,
                    width: 40, height: 2,
                    background: `linear-gradient(90deg, ${alpha(brand[400], 0.2)}, ${alpha(brand[400], 0)})`,
                    zIndex: -1
                  }} />
                )}

                <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>{step.title}</Typography>
                <Typography variant="body1" color="text.secondary" fontWeight={400} lineHeight={1.7} >
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
