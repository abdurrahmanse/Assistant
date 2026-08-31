import { Handshake, Paperclip, Headset } from 'lucide-react';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import MarketingLayout from '@/layouts/MarketingLayout';
import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { useContactFormMutation } from '@/features/landing/hooks/mutations/useLandingMutation';
import ContactInfo from '@/features/contact/components/info';
import ContactForm from '@/features/contact/components/form';

export default function ContactPage(props: { disableCustomTheme?: boolean }) {
  const { data: contact, isLoading } = useContactQuery();
  const { mutate: submit, isPending, isSuccess, isError, error } = useContactFormMutation();

  if (isLoading || !contact) {
    return (
      <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
        <Box sx={{ pt: { xs: 16, md: 24 }, pb: 12, bgcolor: 'background.default' }}>
          <Box sx={{ maxWidth: 900, mx: 'auto' }}>
            <Skeleton width="40%" height={80} sx={{ mb: 2 }} />
            <Skeleton width="60%" height={32} sx={{ mb: 10 }} />
            <Grid container spacing={10}>
              <Grid size={{ xs: 12, md: 4 }}><Skeleton variant="rectangular" height={300} sx={{ borderRadius: 2 }} /></Grid>
              <Grid size={{ xs: 12, md: 8 }}><Skeleton variant="rectangular" height={400} sx={{ borderRadius: 2 }} /></Grid>
            </Grid>
          </Box>
        </Box>
      </MarketingLayout>
    );
  }

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 16, md: 24 }, pb: 12, bgcolor: 'background.default' }}>
        <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
          
          <Box sx={{ mb: { xs: 8, md: 12 } }}>
            <Typography variant="h1" sx={{ fontWeight: 900, fontSize: 'clamp(3rem, 6vw, 4.5rem)', letterSpacing: '-0.03em', mb: 3 }}>
              <Handshake size={64} color="var(--template-palette-primary-main)" style={{ verticalAlign: 'middle', marginRight: '16px', transform: 'translateY(-8px) rotate(-10deg)' }} />
              {contact.heading}
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, fontWeight: 400, lineHeight: 1.6 }}>
              {contact.subheading}
            </Typography>
          </Box>

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
      </Box>
    </MarketingLayout>
  );
}
