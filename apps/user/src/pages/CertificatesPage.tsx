import React from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@repo/ui';
import { Download, Award } from 'lucide-react';
import { mockCertificates } from '@/data/mock';

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
              <Box sx={(theme) => ({
                height: '100%', display: 'flex', flexDirection: 'column',
                borderRadius: '24px', 
                border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
                bgcolor: 'rgba(255,255,255,0.6)',
                ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
                backdropFilter: 'blur(24px)',
                overflow: 'hidden',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '8px 8px 0px rgba(236,72,153,1)',
                  borderColor: '#ec4899',
                }
              })}>
                <Box sx={{ width: '100%', aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
                  <Box component="img" src={cert.imageUrl} alt={cert.title} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <Box sx={{ position: 'absolute', top: 16, right: 16, p: 1, borderRadius: '12px', bgcolor: '#ec4899', color: '#fff' }}>
                    <Award size={20} />
                  </Box>
                </Box>
                
                <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: 900, mb: 1, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                    {cert.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" fontWeight={600} sx={{ mb: 3 }}>
                    Issued on {cert.issueDate}
                  </Typography>
                  
                  <Box sx={{ mt: 'auto' }}>
                    <Button variant="primary" fullWidth startIcon={<Download size={16} />}>
                      Download PDF
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}
