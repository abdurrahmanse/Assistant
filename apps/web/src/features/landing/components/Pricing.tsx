import { Sparkles, ChevronRight } from 'lucide-react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { MutedText } from '@repo/ui/styled';
import {
  PricingContainer,
  PricingHeader,
  PricingGrid,
  PricingCard,
  CardHeaderBox,
  CardPriceBox,
  FeatureLineBox,
  FeatureLineText,
  StyledCheckCircle,
} from './Pricing.styles';

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support',
    ],
    buttonText: 'Sign up for free',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
  {
    title: 'Professional',
    subheader: 'Recommended',
    price: '15',
    description: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support',
      'Dedicated team',
      'Best deals',
    ],
    buttonText: 'Start now',
    buttonVariant: 'contained',
    buttonColor: 'secondary',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support',
    ],
    buttonText: 'Contact us',
    buttonVariant: 'outlined',
    buttonColor: 'primary',
  },
];

export default function Pricing() {
  return (
    <PricingContainer id="pricing">
      <PricingHeader>
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          Pricing
        </Typography>
        <MutedText variant="body1">
          Quickly build an effective pricing table for your potential customers with
          this layout. <br />
          It&apos;s built with default Material UI components with little
          customization.
        </MutedText>
      </PricingHeader>
      <PricingGrid container spacing={3}>
        {tiers.map((tier) => {
          const isProfessional = tier.title === 'Professional';
          return (
            <Grid
              size={{ xs: 12, sm: tier.title === 'Enterprise' ? 12 : 6, md: 4 }}
              key={tier.title}
            >
              <PricingCard isProfessional={isProfessional}>
                <CardContent>
                  <CardHeaderBox isProfessional={isProfessional}>
                    <Typography component="h3" variant="h6">
                      {tier.title}
                    </Typography>
                    {isProfessional && (
                      <Chip icon={<Sparkles size={20} />} label={tier.subheader} />
                    )}
                  </CardHeaderBox>
                  <CardPriceBox isProfessional={isProfessional}>
                    <Typography component="h3" variant="h2">
                      ${tier.price}
                    </Typography>
                    <Typography component="h3" variant="h6">
                      &nbsp; per month
                    </Typography>
                  </CardPriceBox>
                  <Divider sx={{ my: 2, opacity: 0.8, borderColor: 'divider' }} />
                  {tier.description.map((line) => (
                    <FeatureLineBox key={line}>
                      <StyledCheckCircle isProfessional={isProfessional} />
                      <FeatureLineText variant="subtitle2" isProfessional={isProfessional}>
                        {line}
                      </FeatureLineText>
                    </FeatureLineBox>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    color={tier.buttonColor as 'primary' | 'secondary'}
                    startIcon={<ChevronRight size={18} />}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </PricingCard>
            </Grid>
          );
        })}
      </PricingGrid>
    </PricingContainer>
  );
}
