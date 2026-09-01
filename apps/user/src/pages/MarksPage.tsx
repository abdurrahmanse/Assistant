import { Heading, Text } from '@repo/ui';
import { Award } from 'lucide-react';
import { mockMarks } from '@/data/mock';
import { MarkCard } from '@/features/marks/components/MarkCard';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function MarksPage() {
  return (
    <StudentLayout>
      

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px', boxShadow: '0 8px 16px rgba(236,72,153,0.3)' }}>
            <Award size={32} />
          </Box>
          <Box>
            <Heading level={2}>Marks & Grades</Heading>
            <Text muted>View your performance across all courses.</Text>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {mockMarks.map((mark) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={mark.id}>
              <MarkCard mark={mark} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}

