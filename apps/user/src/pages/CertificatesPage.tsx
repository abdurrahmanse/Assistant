import { mockCertificates } from '@/data/mock';
import { Certificate3DCard } from '@/features/dashboard/components/Certificate3DCard';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function CertificatesPage() {
  return (
    <StudentLayout>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 2 }}>
            Certificates
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Your earned certificates and accomplishments.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {mockCertificates.map((cert) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={cert.id}>
              <Certificate3DCard cert={cert} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}
