import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import { Card, CardContent, Heading, Text, TextInput as TextField } from '@repo/ui';
import { Globe, Mail, MapPin } from 'lucide-react';
import { styles } from '../../../pages/ProfilePage.styles';
import type { UserProfile } from '@/interfaces';

export function ProfilePersonalForm({ user }: { user: UserProfile }) {
  return (
    <Card glass>
      <CardContent sx={styles.formCardContent}>
        <Heading level={4} sx={{ mb: 1 }}>Personal Information</Heading>
        <Text muted sx={{ mb: 4 }}>Update your basic profile details.</Text>
        
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField 
              label="First Name" 
              defaultValue={user.name.split(' ')[0]} 
              fullWidth 
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField 
              label="Last Name" 
              defaultValue={user.name.split(' ').slice(1).join(' ')} 
              fullWidth 
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField 
              label="Email Address" 
              defaultValue={user.email} 
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
  );
}
