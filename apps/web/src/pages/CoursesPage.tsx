import React from 'react';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CourseCatalog from '@/features/landing/components/CourseCatalog';
import MarketingLayout from '@/layouts/MarketingLayout';

export default function CoursesPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 4, sm: 8 }, bgcolor: 'background.default' }}>
        <Container>
          <Typography variant="h1" sx={{ textAlign: 'center', mb: 2, fontSize: 'clamp(2.5rem, 8vw, 3.5rem)' }}>
            All Courses
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
            Filter and browse our comprehensive library of enterprise-grade courses.
          </Typography>
        </Container>
      </Box>
      <Divider />
      <CourseCatalog />
    </MarketingLayout>
  );
}
