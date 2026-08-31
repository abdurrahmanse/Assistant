import * as React from 'react';
import Box from '@mui/material/Box';
import AssistantLogo from '@/components/AssistantLogo';
import { useNavigate } from 'react-router';

export function NavLogo() {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/')}>
      <AssistantLogo />
    </Box>
  );
}
