import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Card, Button, TextInput } from '@repo/ui';
import AssistantLogo from '@/components/AssistantLogo';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export default function SignInPage() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default', p: 3 }}>
      <Card sx={{ maxWidth: 400, width: '100%', p: 4, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: brand[500], boxShadow: `0 0 12px ${brand[500]}` }} />
        
        <Stack spacing={3} alignItems="center" mb={4}>
          <AssistantLogo />
          <Typography variant="h5" fontWeight={700} sx={{ letterSpacing: '-0.02em' }}>
            Admin Authorization
          </Typography>
        </Stack>

        <Stack spacing={3}>
          <TextInput label="System ID / Email" placeholder="admin@data-science.edu" fullWidth />
          <TextInput label="Access Key" type="password" placeholder="••••••••" fullWidth />
          <Button variant="primary" fullWidth sx={{ py: 1.5 }}>
            Authenticate Node
          </Button>
        </Stack>
      </Card>
    </Box>
  );
}
