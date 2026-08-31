import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import MarketingLayout from '@/layouts/MarketingLayout';

export default function ContactPage(props: { disableCustomTheme?: boolean }) {
  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h1" sx={{ textAlign: 'center', mb: 2, fontSize: 'clamp(2.5rem, 8vw, 3.5rem)' }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mb: 8 }}>
            Have questions about a course or need enterprise training? We are here to help.
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6}>
            <Box sx={{ flex: 1 }}>
              <Stack spacing={4}>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                    <Mail size={24} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Email Us</Typography>
                    <Typography variant="body2" color="text.secondary">support@academy.com</Typography>
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                    <Phone size={24} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>Call Us</Typography>
                    <Typography variant="body2" color="text.secondary">+1 (555) 123-4567</Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>
            
            <Box sx={{ flex: 1, p: 4, borderRadius: '24px', bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(16px)', border: '1px solid', borderColor: 'divider', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)' }}>
              <Stack spacing={3}>
                <TextField label="Full Name" variant="outlined" fullWidth />
                <TextField label="Email Address" variant="outlined" fullWidth />
                <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
                <Button variant="contained" size="large" endIcon={<Send size={18} />} sx={{ fontWeight: 800 }}>
                  Send Message
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </MarketingLayout>
  );
}
