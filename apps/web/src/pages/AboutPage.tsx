import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import MarketingLayout from '@/layouts/MarketingLayout';
import { Target, Users, BookOpen } from 'lucide-react';

export default function AboutPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 10 }}>
            <Typography variant="h1" sx={{ fontWeight: 900, mb: 3, fontSize: 'clamp(2.5rem, 8vw, 4rem)' }}>
              Our Mission
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}>
              We believe that elite technical and marketing education should be accessible to everyone. Our platform bridges the gap between theory and real-world application through project-based learning.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 12 }}>
            {[
              { icon: <Target size={32} />, title: 'Goal-Oriented', desc: 'Every course is designed with a specific career outcome in mind.' },
              { icon: <Users size={32} />, title: 'Community-Driven', desc: 'Learn alongside thousands of peers in our active Discord community.' },
              { icon: <BookOpen size={32} />, title: 'Expert-Led', desc: 'Curriculums designed and taught by senior industry professionals.' },
            ].map((item, i) => (
              <Grid size={{ xs: 12, md: 4 }} key={i}>
                <Box sx={{ p: 4, height: '100%', borderRadius: '24px', bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(16px)', border: '1px solid', borderColor: 'divider', textAlign: 'center' }}>
                  <Box sx={{ color: 'primary.main', mb: 2, display: 'flex', justifyContent: 'center' }}>{item.icon}</Box>
                  <Typography variant="h5" sx={{ fontWeight: 800, mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </MarketingLayout>
  );
}
