import { Heading, Text } from '@repo/ui';
import { FileText } from 'lucide-react';
import { mockAssignments } from '@/data/mock';
import { AssignmentCard } from '@/features/assignments/components/AssignmentCard';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function AssignmentsPage() {
  return (
    <StudentLayout>
      

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px', boxShadow: '0 8px 16px rgba(236,72,153,0.3)' }}>
            <FileText size={32} />
          </Box>
          <Box>
            <Heading level={2}>Assignments</Heading>
            <Text muted>Track your coursework and upcoming deadlines.</Text>
          </Box>
        </Box>
        <Grid container spacing={4}>
          {mockAssignments.map((assignment) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={assignment.id}>
              <AssignmentCard assignment={assignment} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}
