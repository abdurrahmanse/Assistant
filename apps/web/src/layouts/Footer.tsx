import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FooterNewsletter } from './footer/FooterNewsletter';
import { FooterLinks } from './footer/FooterLinks';
import { FooterBottom } from './footer/FooterBottom';

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <FooterNewsletter />
        <FooterLinks />
      </Box>
      <FooterBottom />
    </Container>
  );
}
