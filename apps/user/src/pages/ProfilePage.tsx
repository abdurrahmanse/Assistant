import { mockUser } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { Button, TextInput as TextField } from '@repo/ui';
import { Mail, Save, User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <StudentLayout>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 2 }}>
            My Profile
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Manage your personal information and account details.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box sx={(theme) => ({
          borderRadius: '24px', p: { xs: 4, md: 6 },
          border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
          bgcolor: 'rgba(255,255,255,0.6)',
          ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
          backdropFilter: 'blur(24px)'
        })}>
          
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, mb: 6, alignItems: 'center' }}>
            <Avatar src={mockUser.avatar} sx={{ width: 120, height: 120, border: '4px solid', borderColor: 'primary.main' }} />
            <Box>
              <Button variant="outline" sx={{ mb: 2 }}>Change Avatar</Button>
              <Typography variant="body2" color="text.secondary">
                Recommended size: 256x256px. Max file size: 2MB.
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField 
                label="Full Name" 
                defaultValue={mockUser.name} 
                fullWidth 
                slotProps={{ input: { startAdornment: <InputAdornment position="start"><User size={18} /></InputAdornment> } }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField 
                label="Email Address" 
                defaultValue={mockUser.email} 
                fullWidth 
                disabled
                slotProps={{ input: { startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> } }}
              />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <TextField 
                label="Bio" 
                placeholder="Tell us a little bit about yourself"
                multiline
                rows={4}
                fullWidth 
              />
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid', borderColor: 'divider', pt: 4 }}>
            <Button variant="primary" startIcon={<Save size={18} />}>
              Save Changes
            </Button>
          </Box>
        </Box>
      </Container>
    </StudentLayout>
  );
}

