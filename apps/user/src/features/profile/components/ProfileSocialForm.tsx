import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import { Card, CardContent, Heading, Text, TextInput as TextField } from '@repo/ui';
import { Link } from 'lucide-react';
import { styles } from '../../../pages/ProfilePage.styles';

export function ProfileSocialForm() {
  return (
    <Card glass>
      <CardContent sx={styles.formCardContent}>
        <Heading level={4} sx={{ mb: 1 }}>Social Profiles</Heading>
        <Text muted sx={{ mb: 4 }}>Connect your social accounts to your public profile.</Text>
        
        <Stack spacing={3}>
          <TextField variant="standard" 
            placeholder="https://github.com/username"
            fullWidth 
            slotProps={{ input: { startAdornment: <InputAdornment position="start"><Link size={18} /></InputAdornment> } }}
          />
          <TextField variant="standard" 
            placeholder="https://linkedin.com/in/username"
            fullWidth 
            slotProps={{ input: { startAdornment: <InputAdornment position="start"><Link size={18} /></InputAdornment> } }}
          />
          <TextField variant="standard" 
            placeholder="https://twitter.com/username"
            fullWidth 
            slotProps={{ input: { startAdornment: <InputAdornment position="start"><Link size={18} /></InputAdornment> } }}
          />
        </Stack>
      </CardContent>
    </Card>
  );
}
