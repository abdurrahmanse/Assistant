import React from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, Button } from '@repo/ui';
import { LifeBuoy, Mail, MessageSquare } from 'lucide-react';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';
import { PageHeader } from '@repo/ui';

export default function SupportPage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <PageHeader 
          icon={<LifeBuoy size={32} />}
          title="Technical Support"
          description="Troubleshoot issues, access documentation, or contact an engineer."
        />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card glass hoverable sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, bgcolor: alpha(brand[500], 0.1), color: brand[500], borderRadius: '12px', width: 'fit-content', mb: 3 }}>
                <MessageSquare size={24} />
              </Box>
              <Typography variant="h5" fontWeight={700} mb={1}>Live Engineer Chat</Typography>
              <Typography variant="body1" color="text.secondary" mb={4} flexGrow={1}>
                Connect with our technical support team in real-time to debug any issues with your environment.
              </Typography>
              <Button variant="primary" fullWidth>Open Chat Terminal</Button>
            </Card>
          </Grid>
          
          <Grid size={{ xs: 12, md: 6 }}>
            <Card glass hoverable sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 2, bgcolor: alpha('#10b981', 0.1), color: '#10b981', borderRadius: '12px', width: 'fit-content', mb: 3 }}>
                <Mail size={24} />
              </Box>
              <Typography variant="h5" fontWeight={700} mb={1}>Email Support Ticket</Typography>
              <Typography variant="body1" color="text.secondary" mb={4} flexGrow={1}>
                Submit a detailed ticket with your execution logs and our team will get back to you within 24 hours.
              </Typography>
              <Button variant="outline" fullWidth>Create Ticket</Button>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </StudentLayout>
  );
}
