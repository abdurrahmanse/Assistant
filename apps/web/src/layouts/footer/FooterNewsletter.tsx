import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Typography from '@mui/material/Typography';
import { Mail, Send } from "lucide-react";
import AssistantLogo from '@/components/AssistantLogo';

export function FooterNewsletter() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        minWidth: { xs: '100%', sm: '60%' },
      }}
    >
      <Box sx={{ width: { xs: '100%', sm: '60%' } }}>
        <AssistantLogo />
        <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
          Join the newsletter
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          Subscribe for weekly updates. No spams ever!
        </Typography>
        <InputLabel htmlFor="email-newsletter">Email</InputLabel>
        <Stack direction="row" spacing={1} useFlexGap>
          <TextField
            id="email-newsletter"
            InputProps={{ startAdornment: <InputAdornment position="start"><Mail size={18} /></InputAdornment> }}
            hiddenLabel
            size="small"
            variant="outlined"
            fullWidth
            aria-label="Enter your email address"
            placeholder="Your email address"
            slotProps={{
              htmlInput: {
                autoComplete: 'off',
                'aria-label': 'Enter your email address',
              },
            }}
            sx={{ width: '250px' }}
          />
          <Button
            variant="contained"
            color="primary"
            size="small"
            sx={{ flexShrink: 0 }}
            startIcon={<Send size={18} />}
          >
            Subscribe
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
