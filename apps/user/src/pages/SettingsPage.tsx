import React, { useState } from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Button } from '@repo/ui';
import { TextInput as TextField } from '@repo/ui';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Avatar from '@mui/material/Avatar';
import { Card } from '@repo/ui';
import Divider from '@mui/material/Divider';
import { User, Mail, Lock, Upload, Save } from 'lucide-react';
import { mockUser } from '@/data/mock';

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: mockUser.name,
    email: mockUser.email,
  });

  return (
    <StudentLayout>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 2 }}>
            Account Settings
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Manage your profile, email, and security preferences.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Avatar Section */}
          <Grid size={{ xs: 12 }}>
            <Card sx={{ p: 4, borderRadius: '24px', display: 'flex', alignItems: 'center', gap: 4, boxShadow: '4px 4px 0px rgba(0,0,0,0.1)', border: '2px solid', borderColor: 'divider', '&:hover': { transform: 'translateY(-2px)', boxShadow: '6px 6px 0px rgba(0,0,0,0.1)' }, transition: 'all 0.2s ease' }}>
              <Avatar src={mockUser.avatar} sx={{ width: 100, height: 100 }} />
              <Box>
                <Typography variant="h6" fontWeight={800} mb={1}>Profile Picture</Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>JPG, GIF or PNG. Max size of 2MB.</Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="outline" startIcon={<Upload size={16} />} sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 600 }}>
                    Upload New
                  </Button>
                  <Button variant="ghost" color="error" sx={{ borderRadius: '8px', textTransform: 'none', fontWeight: 600 }}>
                    Remove
                  </Button>
                </Stack>
              </Box>
            </Card>
          </Grid>

          {/* Profile Form */}
          <Grid size={{ xs: 12 }}>
            <Card sx={{ p: { xs: 4, md: 6 }, borderRadius: '24px', boxShadow: '4px 4px 0px rgba(0,0,0,0.1)', border: '2px solid', borderColor: 'divider', '&:hover': { transform: 'translateY(-2px)', boxShadow: '6px 6px 0px rgba(0,0,0,0.1)' }, transition: 'all 0.2s ease' }}>
              <Typography variant="h5" fontWeight={800} mb={4}>Personal Information</Typography>
              
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <FormControl>
                  <FormLabel htmlFor="name" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>Full Name</FormLabel>
                  <TextField
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    InputProps={{ startAdornment: <InputAdornment position="start"><User size={18} /></InputAdornment> }}
                    fullWidth
                    variant="outlined"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="email" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>Email Address</FormLabel>
                  <TextField
                    id="email"
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    InputProps={{ startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> }}
                    fullWidth
                    variant="outlined"
                  />
                </FormControl>

                <Divider sx={{ my: 2 }} />
                
                <Typography variant="h5" fontWeight={800} mb={1}>Change Password</Typography>
                <Typography variant="body2" color="text.secondary" mb={3}>Leave blank to keep your current password.</Typography>

                <FormControl>
                  <FormLabel htmlFor="current-password" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>Current Password</FormLabel>
                  <TextField
                    id="current-password"
                    type="password"
                    placeholder="Enter current password"
                    InputProps={{ startAdornment: <InputAdornment position="start"><Lock size={18} /></InputAdornment> }}
                    fullWidth
                    variant="outlined"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="new-password" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>New Password</FormLabel>
                  <TextField
                    id="new-password"
                    type="password"
                    placeholder="Enter new password"
                    InputProps={{ startAdornment: <InputAdornment position="start"><Lock size={18} /></InputAdornment> }}
                    fullWidth
                    variant="outlined"
                  />
                </FormControl>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button 
                    variant="primary" 
                    size="large"
                    startIcon={<Save size={18} />} 
                    sx={{ px: 4, borderRadius: '8px', fontWeight: 700, textTransform: 'none' }}
                  >
                    Save Changes
                  </Button>
                </Box>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </StudentLayout>
  );
}
