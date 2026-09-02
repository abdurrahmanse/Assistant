import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Typography from '@mui/material/Typography';
import { Button, Badge as Chip } from '@repo/ui';
import { Check, Rocket, Zap } from 'lucide-react';
import { useNavigate } from 'react-router';
import { Reveal } from '@/components/Reveal';
import Tilt from 'react-parallax-tilt';


export interface MembershipPlansProps {
  tiers?: any[];
  isLoading?: boolean;
}

export function MembershipPlans({ tiers, isLoading }: MembershipPlansProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const navigate = useNavigate();
  const siteMeta = { portalUrl: 'http://localhost:5174' };

  if (isLoading || !tiers) {
    return <Box sx={{ py: 10 }} />; // Skeleton handled by Hero
  }

  const handleBillingChange = (event: React.MouseEvent<HTMLElement>, newBilling: 'monthly' | 'yearly') => {
    if (newBilling !== null) {
      setBillingCycle(newBilling);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ pb: 12, position: 'relative', zIndex: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
        <Reveal delay={0.2} direction="up">
          <Box sx={{ position: 'relative' }}>
            <ToggleButtonGroup
              value={billingCycle}
              exclusive
              onChange={handleBillingChange}
              aria-label="billing cycle"
              sx={{
                bgcolor: 'background.paper',
                p: 1,
                borderRadius: '30px',
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
          const isHighlighted = tier.popular;
          
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
                    {isHighlighted && (
                      <Box 
                        sx={{ 
                          position: 'absolute', 
                          top: -16, 
                          left: '50%', 
                          transform: 'translateX(-50%)',
                          bgcolor: 'primary.main',
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
                        Most Popular
                      </Box>
                    )}
                    
                    <Box sx={{ flexGrow: 1, mt: isHighlighted ? 2 : 0 }}>
                      <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ fontWeight: 800, color: isHighlighted ? 'primary.main' : 'text.primary' }}>
                        {tier.title}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', my: 3 }}>
                        <Typography variant="h2" align="center" color="text.primary" sx={{ fontWeight: 900, letterSpacing: '-0.03em' }}>
                          {tier.price === 'Free' ? 'Free' : (billingCycle === 'yearly' && tier.price === '$29/mo' ? '$23' : tier.price?.replace('/mo', ''))}
                        </Typography>
                        {tier.price !== 'Free' && (
                          <Typography variant="subtitle1" color="text.secondary" sx={{ ml: 1, fontWeight: 700 }}>
                            /mo
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
                        onClick={() => tier.buttonText === 'Join for Free' ? (window.location.href = siteMeta?.portalUrl ? `${siteMeta.portalUrl}/signup` : 'http://localhost:5174/signup') : (window.location.href = siteMeta?.portalUrl ? `${siteMeta.portalUrl}/checkout?plan=${tier.title.split(' ')[0].toLowerCase()}` : `http://localhost:5174/checkout?plan=${tier.title.split(' ')[0].toLowerCase()}`)}
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
