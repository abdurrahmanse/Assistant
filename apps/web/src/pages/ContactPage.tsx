import Container from '@mui/material/Container';
import { Handshake, Paperclip, Headset } from 'lucide-react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Skeleton } from '@repo/ui';
import MarketingLayout from '@/layouts/MarketingLayout';
import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { useContactFormMutation } from '@/features/landing/hooks/mutations/useLandingMutation';
import ContactInfo from '@/features/contact/components/info';
import ContactForm from '@/features/contact/components/form';
import { ContactHero } from '@/features/contact/components/hero';

export default function ContactPage(props: { disableCustomTheme?: boolean }) {
  const { data: contact, isLoading } = useContactQuery();
  const { mutate: submit, isPending, isSuccess, isError, error } = useContactFormMutation();

  if (isLoading || !contact) {
    return (
      <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
        <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            <Skeleton width="40%" height={80} sx={{ mb: 2 }} />
            <Skeleton width="60%" height={32} sx={{ mb: 10 }} />
            <Grid container spacing={10}>
              <Grid size={{ xs: 12, md: 4 }}><Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2 }} /></Grid>
              <Grid size={{ xs: 12, md: 8 }}><Skeleton variant="rectangular" height={400} sx={{ borderRadius: 2 }} /></Grid>
            </Grid>
          </Box>
        </Container>
        </Box>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, }}>
        <Container maxWidth="lg">
        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          
          <ContactHero heading={contact.heading} subheading={contact.subheading} />

          <Grid container spacing={{ xs: 8, md: 12 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Typography variant="overline" color="text.secondary" fontWeight={800} letterSpacing={1.5}>
                <Headset size={16} style={{ verticalAlign: 'middle', marginRight: '8px', transform: 'translateY(-2px)' }} />Get in touch
              </Typography>
              <ContactInfo contact={contact} />
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Typography variant="overline" color="text.secondary" fontWeight={800} letterSpacing={1.5} sx={{ display: 'block', mb: 4 }}>
                <Paperclip size={16} style={{ verticalAlign: 'middle', marginRight: '8px', transform: 'translateY(-2px)' }} />Send a message
              </Typography>
              <ContactForm
                contact={contact}
                submit={submit}
                isPending={isPending}
                isSuccess={isSuccess}
                isError={isError}
                error={error}
              />
            </Grid>
          </Grid>
          
        </Box>
        </Container>
      </Box>
    </MarketingLayout>
  );
}
