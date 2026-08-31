import { useSiteMetaQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button } from '@repo/ui';
import Divider from '@mui/material/Divider';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { Badge as Chip } from '@repo/ui';
import Tilt from 'react-parallax-tilt';
import { Check, Zap, Rocket } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import type { PricingTier } from '@repo/api-client';
import { Skeleton } from '@repo/ui';
import { useNavigate } from 'react-router';

export interface PricingPlansProps {
  tiers?: PricingTier[];
  isLoading?: boolean;
}

export function PricingPlans({ tiers, isLoading }: PricingPlansProps) {
  const navigate = useNavigate();
  const { data: siteMeta } = useSiteMetaQuery();
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const handleBillingCycle = (event: React.MouseEvent<HTMLElement>, newCycle: 'monthly' | 'yearly') => {
    if (newCycle !== null) {
      setBillingCycle(newCycle);
    }
  };

  if (isLoading || !tiers) {
    return (
      <Container maxWidth="lg" sx={{ mb: 10 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
          <Skeleton variant="rectangular" width={240} height={56} sx={{ borderRadius: '30px' }} />
        </Box>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {[1, 2, 3].map((i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <Skeleton variant="rectangular" height={500} sx={{ borderRadius: 4 }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mb: 14 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Reveal delay={0.1}>
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <ToggleButtonGroup
              value={billingCycle}
              exclusive
              onChange={handleBillingCycle}
              aria-label="billing cycle"
              sx={{
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '30px',
                p: 0.5,
                boxShadow: '0 8px 32px rgba(0,0,0,0.05)',
                '& .MuiToggleButton-root': {
                  border: 'none',
                  borderRadius: '24px !important',
                  px: 4,
                  py: 1.5,
                  fontWeight: 800,
                  color: 'text.secondary',
                  textTransform: 'none',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease',
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    }
                  }
                }
              }}
            >
              <ToggleButton value="monthly" aria-label="monthly">
                Monthly
              </ToggleButton>
              <ToggleButton value="yearly" aria-label="yearly">
                Yearly
              </ToggleButton>
            </ToggleButtonGroup>
            
            {/* Save 20% Badge */}
            <Chip 
              icon={<Zap size={14} fill="currentColor" />}
              label="Save 20%" 
              color="success" 
              variant="solid"
              size="small" 
              sx={(theme) => ({ 
                position: 'absolute', 
                top: -12, 
                right: -32, 
                fontWeight: 900,
                px: 1,
                py: 2,
                transform: 'rotate(12deg)',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
                border: '2px solid white',
                ...theme.applyStyles('dark', { border: '2px solid #111' })
              })} 
            />
          </Box>
        </Reveal>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {tiers.map((tier, index) => {
          const isHighlighted = tier.subheader === 'Most Flexible' || tier.title === 'Pro Plan';
          
          return (
            <Grid size={{ xs: 12, md: 4 }} key={tier.title}>
              <Reveal delay={0.1 + (index * 0.15)} direction="up" width="100%">
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glarePosition="all" style={{ height: '100%' }}>
                  <Box 
                    sx={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      height: '100%',
                      position: 'relative',
                      bgcolor: isHighlighted ? 'rgba(99,102,241,0.03)' : 'background.paper',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '32px',
                      p: 4,
                      border: '2px solid',
                      borderColor: isHighlighted ? 'primary.main' : 'divider',
                      boxShadow: isHighlighted ? '0 24px 48px rgba(99,102,241,0.15)' : '0 12px 24px rgba(0,0,0,0.05)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {tier.subheader && (
                      <Box 
                        sx={{ 
                          position: 'absolute', 
                          top: -16, 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          bgcolor: isHighlighted ? 'primary.main' : 'secondary.main',
                          color: 'white',
                          px: 3,
                          py: 0.75,
                          borderRadius: '20px',
                          fontSize: '0.85rem',
                          fontWeight: 900,
                          letterSpacing: 1,
                          textTransform: 'uppercase',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      >
                        {tier.subheader}
                      </Box>
                    )}
                    
                    <Box sx={{ flexGrow: 1, mt: tier.subheader ? 2 : 0 }}>
                      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ fontWeight: 800, color: isHighlighted ? 'primary.main' : 'text.primary' }}>
                        {tier.title}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', my: 3 }}>
                        <Typography variant="h2" align="center" color="text.primary" sx={{ fontWeight: 900, letterSpacing: '-0.03em' }}>
                          {tier.title === 'Annual Subscription' || tier.title === 'Pro Plan' 
                            ? (billingCycle === 'yearly' ? '$29' : '$3')
                            : tier.price?.replace('/mo', '').replace('/month', '')}
                        </Typography>
                        {(tier.title === 'Annual Subscription' || tier.title === 'Pro Plan' || tier.price?.includes('/')) && (
                          <Typography variant="subtitle1" color="text.secondary" sx={{ ml: 1, fontWeight: 700 }}>
                            {billingCycle === 'yearly' ? '/yr' : '/mo'}
                          </Typography>
                        )}
                      </Box>
                      
                      <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 4, minHeight: 40 }}>
                        {isHighlighted ? 'Everything you need to master your career.' : 'Perfect for getting started on your journey.'}
                      </Typography>

                      <Divider sx={{ mb: 4, borderColor: isHighlighted ? 'rgba(99,102,241,0.2)' : 'divider' }} />
                      
                      <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                        {tier.description.map((line: string) => (
                          <Typography component="li" variant="body2" color="text.primary" key={line} sx={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            mb: 2.5, 
                            fontWeight: 600,
                            lineHeight: 1.5
                          }}>
                            <Box sx={{ mt: 0.25, mr: 1.5, p: 0.5, borderRadius: '50%', bgcolor: isHighlighted ? 'primary.main' : 'rgba(0,0,0,0.05)', color: isHighlighted ? 'white' : 'text.secondary', display: 'flex' }}>
                              <Check size={12} strokeWidth={4} />
                            </Box>
                            {line}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                    
                    <Box sx={{ pt: 4 }}>
                      <Button 
                        onClick={() => tier.buttonText === 'Browse Courses' ? navigate('/courses') : (window.location.href = siteMeta?.portalUrl ? `${siteMeta.portalUrl}/checkout` : 'http://localhost:5174/checkout')}
                        fullWidth 
                        size="large"
                        variant={isHighlighted ? 'primary' : 'outline'} 
                        endIcon={<Rocket size={18} />}
                        sx={{ 
                          py: 2, 
                          borderRadius: '16px', 
                          fontSize: '1.1rem',
                          fontWeight: 800,
                          borderWidth: isHighlighted ? 0 : 2,
                          '&:hover': {
                            transform: 'translateY(-2px)',
                            boxShadow: isHighlighted ? '0 8px 24px rgba(99,102,241,0.4)' : 'none'
                          }
                        }}
                      >
                        {tier.buttonText}
                      </Button>
                    </Box>
                  </Box>
                </Tilt>
              </Reveal>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
