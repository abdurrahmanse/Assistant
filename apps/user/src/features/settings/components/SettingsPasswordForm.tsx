import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { TextInput as TextField } from '@repo/ui';
import { Lock } from 'lucide-react';

export function SettingsPasswordForm() {
  return (
    <>
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
    </>
  );
}
