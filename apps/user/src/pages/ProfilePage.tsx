import { mockUser } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import { Button, Card, CardContent, Heading, Text, TextInput as TextField } from '@repo/ui';
import { Camera, CheckCircle2, Globe, Link, Mail, MapPin, Save, User } from 'lucide-react';
import React from 'react';

export default function ProfilePage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ mb: 6, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white', borderRadius: '16px', boxShadow: '0 8px 16px rgba(236,72,153,0.3)' }}>
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
                <Box sx={{ 
                  height: 100, 
                  background: 'linear-gradient(135deg, var(--template-palette-primary-main) 0%, var(--template-palette-secondary-main) 100%)' 
                }} />
                <CardContent sx={{ pt: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <Box sx={{ position: 'relative', mt: -6, mb: 2 }}>
                    <Avatar 
                      src={mockUser.avatar} 
                      sx={{ 
                        width: 100, height: 100, 
                        border: '4px solid', borderColor: 'background.paper',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                      }} 
                    />
                    <Box sx={{ 
                      position: 'absolute', bottom: 0, right: 0, 
                      bgcolor: 'primary.main', color: 'white', 
                      p: 0.75, borderRadius: '50%', cursor: 'pointer',
                      border: '2px solid', borderColor: 'background.paper',
                      transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.1)' }
                    }}>
                      <Camera size={14} />
                    </Box>
                  </Box>
                  
                  <Heading level={4} sx={{ mb: 0.5 }}>{mockUser.name}</Heading>
                  <Text muted sx={{ mb: 2 }}>Student</Text>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'success.main', mb: 3 }}>
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
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text muted>Courses Enrolled</Text>
                      <Heading level={6}>4</Heading>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Text muted>Courses Completed</Text>
                      <Heading level={6}>1</Heading>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
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
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
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
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, pt: 2 }}>
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
