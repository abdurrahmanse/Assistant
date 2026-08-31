import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';

import MarketingLayout from '@/layouts/MarketingLayout';
import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { useContactFormMutation } from '@/features/landing/hooks/mutations/useLandingMutation';

import ContactInfo from '@/features/contact/components/ContactInfo';
import ContactForm from '@/features/contact/components/ContactForm';

export default function ContactPage(props: { disableCustomTheme?: boolean }) {
  const { data: contact, isLoading } = useContactQuery();
  const { mutate: submit, isPending, isSuccess, isError, error } = useContactFormMutation();

  if (isLoading || !contact) {
    return (
      <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
        <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, bgcolor: 'background.default' }}>
          
            <Skeleton variant="rectangular" width="40%" height={50} sx={{ mx: 'auto', mb: 3, borderRadius: 2 }} />
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 5 }}>{[1, 2, 3, 4, 5].map((i) => <Skeleton key={i} height={60} sx={{ mb: 1 }} />)}</Grid>
              <Grid size={{ xs: 12, md: 7 }}><Skeleton variant="rectangular" height={480} sx={{ borderRadius: 3 }} /></Grid>
            </Grid>
          
        </Box>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, bgcolor: 'background.default' }}>
        
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontWeight: 900, mb: 2 }}>{contact.heading}</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 560, mx: 'auto' }}>
              {contact.subheading}
            </Typography>
          </Box>

          <Grid container spacing={6}>
            {/* Left */}
            <Grid size={{ xs: 12, md: 5 }}>
              <ContactInfo contact={contact} />
            </Grid>

            {/* Right: form */}
            <Grid size={{ xs: 12, md: 7 }}>
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
    </MarketingLayout>
  );
}
