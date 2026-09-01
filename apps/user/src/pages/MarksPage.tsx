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
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 2 }}>
            Marks & Grades
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            View your performance across all courses.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
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

