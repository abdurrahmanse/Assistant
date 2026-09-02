import React, { useState } from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { Button, Card } from '@repo/ui';
import { Save, Settings } from 'lucide-react';
import { mockUser } from '@/data/mock';

import { PageHeader } from '@repo/ui';
import { SettingsAvatarCard } from '@/features/settings/components/SettingsAvatarCard';
import { SettingsPersonalForm } from '@/features/settings/components/SettingsPersonalForm';
import { SettingsPasswordForm } from '@/features/settings/components/SettingsPasswordForm';

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: mockUser.name,
    email: mockUser.email,
  });

  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <PageHeader 
          icon={<Settings size={32} />}
          title="Account Settings"
          description="Manage your profile, email, and security preferences."
        />
        
        <Grid container spacing={6}>
          {/* Avatar Section */}
          <Grid size={{ xs: 12 }}>
            <SettingsAvatarCard user={mockUser} />
          </Grid>

          {/* Profile Form */}
          <Grid size={{ xs: 12 }}>
            <Card sx={{ p: { xs: 4, md: 6 }, borderRadius: '24px', border: '1px solid', borderColor: 'divider', boxShadow: '0 4px 20px rgba(0,0,0,0.02)', transition: 'all 0.2s ease' }}>
              <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <SettingsPersonalForm profile={profile} setProfile={setProfile} />

                <Divider sx={{ my: 2 }} />
                
                <SettingsPasswordForm />

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
