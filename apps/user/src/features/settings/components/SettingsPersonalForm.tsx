import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { TextInput as TextField } from '@repo/ui';
import { Mail, User } from 'lucide-react';

interface SettingsPersonalFormProps {
  profile: { name: string; email: string };
  setProfile: (profile: { name: string; email: string }) => void;
}

export function SettingsPersonalForm({ profile, setProfile }: SettingsPersonalFormProps) {
  return (
    <>
      <Typography variant="h5" fontWeight={800} mb={4}>Personal Information</Typography>
      
      <FormControl>
        <FormLabel htmlFor="name" sx={{ mb: 1, fontWeight: 600, color: 'text.primary' }}>Full Name</FormLabel>
        <TextField
          id="name"
          value={profile.name}
          onChange={(e: any) => setProfile({ ...profile, name: e.target.value })}
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
          onChange={(e: any) => setProfile({ ...profile, email: e.target.value })}
          InputProps={{ startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> }}
          fullWidth
          variant="outlined"
        />
      </FormControl>
    </>
  );
}
