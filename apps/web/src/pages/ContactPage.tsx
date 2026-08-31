import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import MarketingLayout from '@/layouts/MarketingLayout';
import { useContactQuery } from '@/features/landing/hooks/queries/useLandingQuery';
import { useContactFormMutation } from '@/features/landing/hooks/mutations/useLandingMutation';
import { ContactHero } from '@/features/contact/components/hero';
import { ContactGrid } from '@/features/contact/components/grid';

export default function ContactPage(props: { disableCustomTheme?: boolean }) {
  const { data: contact, isLoading } = useContactQuery();
  const { mutate: submit, isPending, isSuccess, isError, error } = useContactFormMutation();

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
            <ContactHero heading={contact?.heading} subheading={contact?.subheading} isLoading={isLoading} />
            <ContactGrid 
              contact={contact} 
              submit={submit}
              isPending={isPending}
              isSuccess={isSuccess}
              isError={isError}
              error={error}
              isLoading={isLoading} 
            />
          </Box>
        </Container>
      </Box>
    </MarketingLayout>
  );
}
