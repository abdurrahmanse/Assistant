import { Heading, Text } from '@repo/ui';
import { Medal } from 'lucide-react';
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
      

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px', boxShadow: '0 8px 16px rgba(236,72,153,0.3)' }}>
            <Medal size={32} />
          </Box>
          <Box>
            <Heading level={2}>Certificates</Heading>
            <Text muted>Your earned certificates and accomplishments.</Text>
          </Box>
        </Box>
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
