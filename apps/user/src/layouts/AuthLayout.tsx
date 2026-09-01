import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import ColorModeSelect from '@repo/ui/shared-theme/ColorModeSelect';

interface AuthLayoutProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <Stack
        direction="column"
        component="main"
        sx={{
          justifyContent: 'center',
          height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
          marginTop: 'max(40px - var(--template-frame-height, 0px), 0px)',
          minHeight: '100vh',
          bgcolor: 'background.default'
        }}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={{
            justifyContent: 'center',
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: 'auto',
          }}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: 'auto',
            }}
          >
            {children}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
