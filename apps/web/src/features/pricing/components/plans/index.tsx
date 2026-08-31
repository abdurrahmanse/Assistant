import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import type { PricingTier } from '@repo/api-client';

export interface PricingPlansProps {
  tiers: PricingTier[];
}

export function PricingPlans({ tiers }: PricingPlansProps) {
  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {tiers.map((tier, index) => (
          <Grid size={{ xs: 12, md: 4 }} key={tier.title}>
            <Reveal delay={0.1 + (index * 0.15)} direction="up" width="100%">
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
                  {tier.price}
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
            </Reveal>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
