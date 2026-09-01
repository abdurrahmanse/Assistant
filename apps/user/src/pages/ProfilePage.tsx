import { mockUser } from '@/data/mock';
import { styles } from './ProfilePage.styles';
import StudentLayout from '@/layouts/StudentLayout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import { Button, Card, CardContent, Heading, Text, TextInput as TextField } from '@repo/ui';
import { Camera, CheckCircle2, Globe, Link, Mail, MapPin, Save, User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={styles.headerWrapper}>
          <Box sx={styles.headerIconBox}>
            <User size={32} />
          </Box>
          <Box>
            <Heading level={2}>My Profile</Heading>
            <Text muted>Manage your public profile and personal information.</Text>
          </Box>
        </Box>

        <Grid container spacing={4}>
          {/* Left Column: Avatar & Quick Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={4}>
              <Card glass hoverable sx={{ overflow: 'hidden' }}>
                {/* Banner */}
                <Box sx={styles.banner} />
                <CardContent sx={styles.cardContent}>
                  <Box sx={styles.avatarWrapper}>
                    <Avatar 
                      src={mockUser.avatar} 
                      sx={styles.avatar} 
                    />
                    <Box sx={styles.cameraButton}>
                      <Camera size={14} />
                    </Box>
                  </Box>
                  
                  <Heading level={4} sx={{ mb: 0.5 }}>{mockUser.name}</Heading>
                  <Text muted sx={{ mb: 2 }}>Student</Text>
                  
                  <Box sx={styles.verifiedBadge}>
                    <CheckCircle2 size={16} />
                    <Text variant="caption" bold sx={{ color: 'inherit' }}>Verified Account</Text>
                  </Box>
                  
                  <Button variant="outline" fullWidth>View Public Profile</Button>
                </CardContent>
              </Card>

              <Card glass hoverable>
                <CardContent>
                  <Heading level={5} sx={{ mb: 3 }}>Completion Stats</Heading>
                  <Stack spacing={2}>
                    <Box sx={styles.statsRow}>
                      <Text muted>Courses Enrolled</Text>
                      <Heading level={6}>4</Heading>
                    </Box>
                    <Box sx={styles.statsRow}>
                      <Text muted>Courses Completed</Text>
                      <Heading level={6}>1</Heading>
                    </Box>
                    <Box sx={styles.statsRow}>
                      <Text muted>Certificates Earned</Text>
                      <Heading level={6}>1</Heading>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Grid>

          {/* Right Column: Edit Forms */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={4}>
              {/* Personal Information */}
              <Card glass>
                <CardContent sx={styles.formCardContent}>
                  <Heading level={4} sx={{ mb: 1 }}>Personal Information</Heading>
                  <Text muted sx={{ mb: 4 }}>Update your basic profile details.</Text>
                  
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        label="First Name" 
                        defaultValue={mockUser.name.split(' ')[0]} 
                        fullWidth 
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        label="Last Name" 
                        defaultValue={mockUser.name.split(' ').slice(1).join(' ')} 
                        fullWidth 
                      />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField 
                        label="Email Address" 
                        defaultValue={mockUser.email} 
                        fullWidth 
                        disabled
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> } }}
                      />
                      <Text variant="caption" muted sx={{ display: 'block', mt: 1 }}>Email address cannot be changed directly. Contact support if you need to update it.</Text>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                      <TextField 
                        label="Bio" 
                        placeholder="Tell us a little bit about yourself... what are you learning?"
                        multiline
                        rows={4}
                        fullWidth 
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        label="Location" 
                        placeholder="e.g. San Francisco, CA"
                        fullWidth 
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><MapPin size={18} /></InputAdornment> } }}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField 
                        label="Website" 
                        placeholder="https://yourwebsite.com"
                        fullWidth 
                        slotProps={{ input: { startAdornment: <InputAdornment position="start"><Globe size={18} /></InputAdornment> } }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card glass>
                <CardContent sx={styles.formCardContent}>
                  <Heading level={4} sx={{ mb: 1 }}>Social Profiles</Heading>
                  <Text muted sx={{ mb: 4 }}>Connect your social accounts to your public profile.</Text>
                  
                  <Stack spacing={3}>
                    <TextField 
                      placeholder="https://github.com/username"
                      fullWidth 
                      slotProps={{ input: { startAdornment: <InputAdornment position="start"><Link size={18} /></InputAdornment> } }}
                    />
                    <TextField 
                      placeholder="https://linkedin.com/in/username"
                      fullWidth 
                      slotProps={{ input: { startAdornment: <InputAdornment position="start"><Link size={18} /></InputAdornment> } }}
                    />
                    <TextField 
                      placeholder="https://twitter.com/username"
                      fullWidth 
                      slotProps={{ input: { startAdornment: <InputAdornment position="start"><Link size={18} /></InputAdornment> } }}
                    />
                  </Stack>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Box sx={styles.actionButtons}>
                <Button variant="outline">Cancel</Button>
                <Button variant="primary" startIcon={<Save size={18} />}>
                  Save Changes
                </Button>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StudentLayout>
  );
}
