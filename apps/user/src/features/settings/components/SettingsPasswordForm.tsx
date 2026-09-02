import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import { TextInput as TextField } from '@repo/ui';
import { Lock } from 'lucide-react';

export function SettingsPasswordForm() {
  return (
    <>
      <Typography variant="h5" fontWeight={800} mb={1}>Change Password</Typography>
      <Typography variant="body2" color="text.secondary" mb={3}>Leave blank to keep your current password.</Typography>

      <TextField
          label="Current Password"
          id="current-password"
          type="password"
          placeholder="Enter current password"
          slotProps={{ input: { startAdornment: <InputAdornment position="start"><Lock size={18} /></InputAdornment> } }}
          fullWidth
          variant="standard"
        />

      <TextField
          label="New Password"
          id="new-password"
          type="password"
          placeholder="Enter new password"
          slotProps={{ input: { startAdornment: <InputAdornment position="start"><Lock size={18} /></InputAdornment> } }}
          fullWidth
          variant="standard"
        />
    </>
  );
}
