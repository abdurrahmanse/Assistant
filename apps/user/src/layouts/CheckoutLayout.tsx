import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import ColorModeIconDropdown from '@repo/ui/shared-theme/ColorModeIconDropdown';
import AssistantLogo from '@/components/AssistantLogo';
import Info from '@/features/checkout/components/Info';

interface CheckoutLayoutProps {
  children: React.ReactNode;
  disableCustomTheme?: boolean;
}

export default function CheckoutLayout({ children, disableCustomTheme }: CheckoutLayoutProps) {
  // We'll mock the total price in the sidebar here, since it was just hardcoded or state based.
  // Real app might pull from a global store or context.
  const totalPrice = '$144.97';

  return (
    <AppTheme disableCustomTheme={disableCustomTheme}>
      <CssBaseline enableColorScheme />
      <Box sx={{ position: 'fixed', top: '1rem', right: '1rem', zIndex: 1000 }}>
        <ColorModeIconDropdown />
      </Box>

      <Grid
        container
        sx={{
          height: {
            xs: '100%',
            sm: 'calc(100dvh - var(--template-frame-height, 0px))',
          },
          mt: { xs: 4, sm: 0 },
        }}
      >
        <Grid
          size={{ xs: 12, sm: 5, lg: 4 }}
          sx={{
            display: { xs: 'none', md: 'flex' },
            flexDirection: 'column',
            backgroundColor: 'background.paper',
            borderRight: { sm: 'none', md: '1px solid' },
            borderColor: { sm: 'none', md: 'divider' },
            alignItems: 'start',
            pt: 16,
            px: 10,
            gap: 4,
          }}
        >
          <AssistantLogo />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              width: '100%',
              maxWidth: 500,
            }}
          >
            <Info totalPrice={totalPrice} />
          </Box>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 12, md: 7, lg: 8 }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '100%',
            width: '100%',
            backgroundColor: { xs: 'transparent', sm: 'background.default' },
            alignItems: 'start',
            pt: { xs: 0, sm: 16 },
            px: { xs: 2, sm: 10 },
            gap: { xs: 4, md: 8 },
          }}
        >
          {children}
        </Grid>
      </Grid>
    </AppTheme>
  );
}
