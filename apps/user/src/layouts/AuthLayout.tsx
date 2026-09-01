import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import ColorModeSelect from '@repo/ui/shared-theme/ColorModeSelect';
import { styles } from './AuthLayout.styles';

interface AuthLayoutProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <ColorModeSelect sx={styles.colorModeSelect} />
      <Stack
        direction="column"
        component="main"
        sx={styles.mainStack}
      >
        <Stack
          direction={{ xs: 'column-reverse', md: 'row' }}
          sx={styles.outerStack}
        >
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={styles.innerStack}
          >
            {children}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
