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
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 2 }}>
            Assignments
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Track your coursework and upcoming deadlines.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
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
