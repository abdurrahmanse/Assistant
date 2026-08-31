import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Button, Card, CardContent } from '@repo/ui';

import CardActions from '@mui/material/CardActions';

import Divider from '@mui/material/Divider';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import { Badge as Chip } from '@repo/ui';
import Tilt from 'react-parallax-tilt';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import type { PricingTier } from '@repo/api-client';

export interface PricingPlansProps {
  tiers: PricingTier[];
}

export function PricingPlans({ tiers }: PricingPlansProps) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  const handleBillingCycle = (event: React.MouseEvent<HTMLElement>, newCycle: 'monthly' | 'yearly') => {
    if (newCycle !== null) {
      setBillingCycle(newCycle);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
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
                '& .MuiToggleButton-root': {
                  border: 'none',
                  borderRadius: '24px !important',
                  px: 4,
                  py: 1.5,
                  fontWeight: 800,
                  color: 'text.secondary',
                  textTransform: 'none',
                  fontSize: '1rem',
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
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
              label="Save 20%" 
              color="success" 
              size="small" 
              sx={{ 
                position: 'absolute', 
                top: -12, 
                right: -24, 
                fontWeight: 900,
                transform: 'rotate(10deg)',
                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
              }} 
            />
          </Box>
        </Reveal>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {tiers.map((tier, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={tier.title}>
            <Reveal delay={0.1 + (index * 0.15)} direction="up" width="100%">
              <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02} transitionSpeed={2000} glareEnable={true} glareMaxOpacity={0.1} glarePosition="all" style={{ height: '100%' }}>
            <Card 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
                position: 'relative',
                borderColor: tier.subheader === 'Most Flexible' ? 'primary.main' : 'divider',
                borderWidth: tier.subheader === 'Most Flexible' ? 2 : 1,
              }}
            >
              {tier.subheader && (
                <Box 
                  sx={{ 
                    position: 'absolute', 
                    top: 0, 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    bgcolor: tier.subheader === 'Most Flexible' ? 'primary.main' : 'secondary.main',
                    color: 'white',
                    px: 2,
                    py: 0.5,
                    borderRadius: 4,
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                  }}
                >
                  {tier.subheader}
                </Box>
              )}
              <CardContent sx={{ flexGrow: 1, p: 4 }}>
                <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ fontWeight: 800 }}>
                  {tier.title}
                </Typography>
                <Typography variant="h3" align="center" color="text.primary" sx={{ fontWeight: 900, my: 3 }}>
                  {tier.title === 'Annual Subscription' || tier.title === 'Pro Plan' 
                    ? (billingCycle === 'yearly' ? '$199/yr' : '$19/mo')
                    : tier.price}
                </Typography>
                <Divider sx={{ mb: 3 }} />
                <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                  {tier.description.map((line: string) => (
                    <Typography component="li" variant="body2" color="text.secondary" key={line} sx={{ display: 'flex', alignItems: 'center', mb: 2, fontWeight: 500 }}>
                      <Check size={16} style={{ marginRight: '12px', color: 'var(--template-palette-primary-main)' }} />
                      {line}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions sx={{ p: 4, pt: 0 }}>
                <Button 
                  fullWidth 
                  variant={tier.buttonVariant} 
                  color={tier.buttonColor}
                >
                  {tier.buttonText}
                </Button>
              </CardActions>
            </Card>
              </Tilt>
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
