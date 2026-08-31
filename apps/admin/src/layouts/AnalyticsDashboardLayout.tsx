import * as React from 'react';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import {
  chartsCustomizations,
  treeViewCustomizations,
} from '@/theme/dashboard-theme/customizations';
import {
  dataGridCustomizations,
  datePickersCustomizations,
  sidebarCustomizations,
  formInputCustomizations,
} from '@/theme/crud-theme/customizations';
import AppNavbar from '@/layouts/DashboardLayout/AppNavbar';
import SideMenu from '@/layouts/DashboardLayout/SideMenu';
import { Outlet } from 'react-router';

const xThemeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
  ...sidebarCustomizations,
  ...formInputCustomizations,
};

interface AnalyticsDashboardLayoutProps {
  disableCustomTheme?: boolean;
}

export default function AnalyticsDashboardLayout(props: AnalyticsDashboardLayoutProps) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Outlet />
        </Box>
      </Box>
    </AppTheme>
  );
}
