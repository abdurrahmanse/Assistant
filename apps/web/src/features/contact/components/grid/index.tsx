import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Headset, Paperclip } from 'lucide-react';
import ContactInfo from '../info';
import ContactForm from '../form';

export interface ContactGridProps {
  contact?: any;
  submit: any;
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  error: unknown;
  isLoading?: boolean;
}

export function ContactGrid({
  contact,
  submit,
  isPending,
  isSuccess,
  isError,
  error,
  isLoading
}: ContactGridProps) {
  return (
    <Grid container spacing={{ xs: 8, md: 12 }}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Typography variant="overline" color="text.secondary" fontWeight={800} letterSpacing={1.5}>
          <Headset size={16} style={{ verticalAlign: 'middle', marginRight: '8px', transform: 'translateY(-2px)' }} />Get in touch
        </Typography>
        <ContactInfo contact={contact} isLoading={isLoading} />
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
          isLoading={isLoading}
        />
      </Grid>
    </Grid>
  );
}
