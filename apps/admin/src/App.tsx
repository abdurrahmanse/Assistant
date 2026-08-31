import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import NotificationsProvider from '@/features/crud/hooks/useNotifications/NotificationsProvider';
import DialogsProvider from '@/features/crud/hooks/useDialogs/DialogsProvider';
import {
  dataGridCustomizations,
  datePickersCustomizations,
  sidebarCustomizations,
  formInputCustomizations,
} from '@/theme/crud-theme/customizations';
import {
  chartsCustomizations,
  treeViewCustomizations,
} from '@/theme/dashboard-theme/customizations';

const Dashboard = React.lazy(() => import('@/pages/AnalyticsPage'));
const SignIn = React.lazy(() => import('@/pages/SignInPage'));
const DashboardLayout = React.lazy(() => import('@/layouts/CrudLayout/DashboardLayout'));
const AnalyticsDashboardLayout = React.lazy(() => import('@/layouts/AnalyticsDashboardLayout'));
const EmployeeList = React.lazy(() => import('@/features/crud/components/EmployeeList'));
const EmployeeShow = React.lazy(() => import('@/features/crud/components/EmployeeShow'));
const EmployeeCreate = React.lazy(() => import('@/features/crud/components/EmployeeCreate'));
const EmployeeEdit = React.lazy(() => import('@/features/crud/components/EmployeeEdit'));

const themeComponents = {
  ...chartsCustomizations,
  ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...sidebarCustomizations,
  ...formInputCustomizations,
  ...treeViewCustomizations,
};

const PageLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
    <CircularProgress />
  </Box>
);

const SectionLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4, width: '100%' }}>
    <CircularProgress />
  </Box>
);

import RouteError from '@/components/RouteError';

const router = createBrowserRouter([
  {
    errorElement: <RouteError />,
    children: [
  {
    path: '/',
    element: (
      <Suspense fallback={<PageLoader />}>
        <AnalyticsDashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<SectionLoader />}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '/signin',
    element: (
      <Suspense fallback={<PageLoader />}>
        <SignIn />
      </Suspense>
    ),
  },
  {
    path: '/employees',
    element: (
      <Suspense fallback={<PageLoader />}>
        <DashboardLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<SectionLoader />}>
            <EmployeeList />
          </Suspense>
        ),
      },
      {
        path: 'new',
        element: (
          <Suspense fallback={<SectionLoader />}>
            <EmployeeCreate />
          </Suspense>
        ),
      },
      {
        path: ':employeeId',
        element: (
          <Suspense fallback={<SectionLoader />}>
            <EmployeeShow />
          </Suspense>
        ),
      },
      {
        path: ':employeeId/edit',
        element: (
          <Suspense fallback={<SectionLoader />}>
            <EmployeeEdit />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <Navigate to="/employees" replace />,
      },
    ],
  },
]
  }
]);

export default function App() {
  return (
    <AppTheme themeComponents={themeComponents}>
      <CssBaseline enableColorScheme />
      <NotificationsProvider>
        <DialogsProvider>
          <RouterProvider router={router} />
        </DialogsProvider>
      </NotificationsProvider>
    </AppTheme>
  );
}
