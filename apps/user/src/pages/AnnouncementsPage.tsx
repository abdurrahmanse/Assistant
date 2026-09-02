import React from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card } from '@repo/ui';
import { BellRing } from 'lucide-react';
import Stack from '@mui/material/Stack';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';
import { PageHeader } from '@/components/ui/PageHeader';

export default function AnnouncementsPage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <PageHeader 
          icon={<BellRing size={32} />}
          title="System Logs & Updates"
          description="Global broadcasts and platform-wide execution notices."
        />

        <Stack spacing={3}>
          <Card glass hoverable sx={{ p: 4, borderLeft: `4px solid ${brand[500]}` }}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 1, letterSpacing: '-0.02em' }}>Platform Update: New Data Science UI</Typography>
            <Typography variant="caption" color={brand[500]} fontWeight={700} sx={{ textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 3 }}>Timestamp: {new Date().toLocaleDateString()}</Typography>
            <Typography variant="body1" color="text.secondary">We have completely revamped our user dashboard to give you a cleaner, more focused computational learning experience.</Typography>
          </Card>
          
          <Card glass hoverable sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight={700} sx={{ mb: 1, letterSpacing: '-0.02em' }}>Upcoming Live Node Execution Session</Typography>
            <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ textTransform: 'uppercase', letterSpacing: 1, display: 'block', mb: 3 }}>Timestamp: 3 days ago</Typography>
            <Typography variant="body1" color="text.secondary">Join us this Friday for a live Q&A session on Advanced Data Pipelines. Don't forget to submit your queries to the buffer beforehand!</Typography>
          </Card>
        </Stack>
      </Container>
    </StudentLayout>
  );
}
