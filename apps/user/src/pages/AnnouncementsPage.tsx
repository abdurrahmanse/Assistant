import React from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Heading, Text, Card } from '@repo/ui';
import { Bell } from 'lucide-react';
import Stack from '@mui/material/Stack';

export default function AnnouncementsPage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px', boxShadow: '0 8px 16px rgba(236,72,153,0.3)' }}>
            <Bell size={32} />
          </Box>
          <Box>
            <Heading level={2}>Announcements</Heading>
            <Text muted>Stay updated with the latest news and platform updates.</Text>
          </Box>
        </Box>

        <Stack spacing={3}>
          <Card glass hoverable sx={{ p: 4 }}>
            <Heading level={4} sx={{ mb: 1 }}>Platform Update: New UI</Heading>
            <Text muted bold sx={{ mb: 3 }}>Posted today</Text>
            <Text>We have completely revamped our user dashboard to give you a cleaner, more focused learning experience.</Text>
          </Card>
          
          <Card glass hoverable sx={{ p: 4 }}>
            <Heading level={4} sx={{ mb: 1 }}>Upcoming Live Q&A Session</Heading>
            <Text muted bold sx={{ mb: 3 }}>Posted 3 days ago</Text>
            <Text>Join us this Friday for a live Q&A session on Advanced React Patterns. Don't forget to submit your questions beforehand!</Text>
          </Card>
        </Stack>
      </Container>
    </StudentLayout>
  );
}
