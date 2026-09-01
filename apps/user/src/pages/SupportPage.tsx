import React from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Heading, Text, Card, Button } from '@repo/ui';
import { LifeBuoy, Mail, MessageCircle, FileQuestion } from 'lucide-react';
import Stack from '@mui/material/Stack';

export default function SupportPage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px', boxShadow: '0 8px 16px rgba(236,72,153,0.3)' }}>
            <LifeBuoy size={32} />
          </Box>
          <Box>
            <Heading level={2}>Support Center</Heading>
            <Text muted>Need help? We're here for you.</Text>
          </Box>
        </Box>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Card glass hoverable sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ p: 2, bgcolor: 'primary.50', color: 'primary.main', borderRadius: '50%', mb: 3 }}>
                <FileQuestion size={32} />
              </Box>
              <Heading level={4} sx={{ mb: 2 }}>FAQ</Heading>
              <Text muted sx={{ mb: 4, flexGrow: 1 }}>Find answers to the most common questions about courses, billing, and certificates.</Text>
              <Button variant="outline" fullWidth>Browse FAQ</Button>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, md: 4 }}>
            <Card glass hoverable sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ p: 2, bgcolor: 'primary.50', color: 'primary.main', borderRadius: '50%', mb: 3 }}>
                <MessageCircle size={32} />
              </Box>
              <Heading level={4} sx={{ mb: 2 }}>Live Chat</Heading>
              <Text muted sx={{ mb: 4, flexGrow: 1 }}>Chat with our support team in real-time. Available Mon-Fri, 9AM-5PM EST.</Text>
              <Button variant="primary" fullWidth>Start Chat</Button>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Card glass hoverable sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <Box sx={{ p: 2, bgcolor: 'primary.50', color: 'primary.main', borderRadius: '50%', mb: 3 }}>
                <Mail size={32} />
              </Box>
              <Heading level={4} sx={{ mb: 2 }}>Email Us</Heading>
              <Text muted sx={{ mb: 4, flexGrow: 1 }}>Send us an email and we'll get back to you within 24 hours.</Text>
              <Button variant="outline" fullWidth>Contact Us</Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </StudentLayout>
  );
}
