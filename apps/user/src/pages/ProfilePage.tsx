import { mockUser } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Button } from '@repo/ui';
import { Save, User } from 'lucide-react';
import { styles } from './ProfilePage.styles';

import { PageHeader } from '@/components/ui/PageHeader';
import { ProfileAvatarCard } from '@/features/profile/components/ProfileAvatarCard';
import { ProfilePersonalForm } from '@/features/profile/components/ProfilePersonalForm';
import { ProfileSocialForm } from '@/features/profile/components/ProfileSocialForm';
import { ProfileStatsCard } from '@/features/profile/components/ProfileStatsCard';

export default function ProfilePage() {
  return (
    <StudentLayout>
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <PageHeader 
          icon={<User size={32} />}
          title="My Profile"
          description="Manage your public profile and personal information."
        />

        <Grid container spacing={4}>
          {/* Left Column: Avatar & Quick Info */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Stack spacing={4}>
              <ProfileAvatarCard user={mockUser} />
              <ProfileStatsCard />
            </Stack>
          </Grid>

          {/* Right Column: Edit Forms */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={4}>
              <ProfilePersonalForm user={mockUser} />
              <ProfileSocialForm />

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
