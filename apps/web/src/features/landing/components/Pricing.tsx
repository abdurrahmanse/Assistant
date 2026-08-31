import { Sparkles, ChevronRight } from 'lucide-react';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
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
import { useLandingQuery } from '../hooks/queries/useLandingQuery';

export default function Pricing() {
  const { data, isLoading } = useLandingQuery();

  if (isLoading || !data) {
    return (
      <PricingContainer id="pricing">
        <Skeleton variant="rectangular" width="40%" height={40} sx={{ mb: 2 }} />
        <Skeleton variant="text" width="60%" height={24} sx={{ mb: 4 }} />
        <PricingGrid container spacing={3}>
          {[1, 2, 3].map((i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <Skeleton variant="rectangular" width="100%" height={400} />
            </Grid>
          ))}
        </PricingGrid>
      </PricingContainer>
    );
  }

  const { pricing } = data;

  return (
    <PricingContainer id="pricing">
      <PricingHeader>
        <Typography component="h2" variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
          {pricing.title}
        </Typography>
        <MutedText variant="body1">
          {pricing.subtitle}
        </MutedText>
      </PricingHeader>
      <PricingGrid container spacing={3}>
        {pricing.tiers.map((tier) => {
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
                    {isProfessional && tier.subheader && (
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
