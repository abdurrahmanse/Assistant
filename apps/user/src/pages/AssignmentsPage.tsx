import { FileCode2 } from 'lucide-react';
import { mockAssignments } from '@/data/mock';
import { AssignmentCard } from '@/features/assignments/components/AssignmentCard';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export default function AssignmentsPage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ 
            p: 2, bgcolor: alpha(brand[500], 0.1), color: brand[500], 
            borderRadius: '16px', border: `1px solid ${alpha(brand[500], 0.2)}`,
            boxShadow: `0 8px 24px ${alpha(brand[500], 0.15)}` 
          }}>
            <FileCode2 size={32} />
          </Box>
          <Box>
            <Typography variant="h3" fontWeight={700} sx={{ letterSpacing: '-0.02em', mb: 0.5 }}>
              Project Pipelines
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Track your deployment deadlines and code reviews.
            </Typography>
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
