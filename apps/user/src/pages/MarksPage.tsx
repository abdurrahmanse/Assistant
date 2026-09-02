import { Target } from 'lucide-react';
import { mockMarks } from '@/data/mock';
import { MarkCard } from '@/features/marks/components/MarkCard';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export default function MarksPage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ 
            p: 2, bgcolor: alpha(brand[500], 0.1), color: brand[500], 
            borderRadius: '16px', border: `1px solid ${alpha(brand[500], 0.2)}`,
            boxShadow: `0 8px 24px ${alpha(brand[500], 0.15)}` 
          }}>
            <Target size={32} />
          </Box>
          <Box>
            <Typography variant="h3" fontWeight={700} sx={{ letterSpacing: '-0.02em', mb: 0.5 }}>
              Model Evaluation
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Review accuracy scores and performance metrics across executed pipelines.
            </Typography>
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
