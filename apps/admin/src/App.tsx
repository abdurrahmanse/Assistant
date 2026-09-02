import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import RouteError from '@/components/RouteError';

const AdminLayout = React.lazy(() => import('@/layouts/AdminLayout'));
const AnalyticsPage = React.lazy(() => import('@/pages/AnalyticsPage'));
const SignInPage = React.lazy(() => import('@/pages/SignInPage'));

// We will build these in step 4
const UsersPage = React.lazy(() => import('@/pages/UsersPage'));
const CoursesPage = React.lazy(() => import('@/pages/CoursesPage'));
const ContentPage = React.lazy(() => import('@/pages/ContentPage'));
const SystemPage = React.lazy(() => import('@/pages/SystemPage'));

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

const router = createBrowserRouter([
  {
    errorElement: <RouteError />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AdminLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SectionLoader />}>
                <AnalyticsPage />
              </Suspense>
            ),
          },
          {
            path: 'users',
            element: (
              <Suspense fallback={<SectionLoader />}>
                <UsersPage />
              </Suspense>
            ),
          },
          {
            path: 'courses',
            element: (
              <Suspense fallback={<SectionLoader />}>
                <CoursesPage />
              </Suspense>
            ),
          },
          {
            path: 'content',
            element: (
              <Suspense fallback={<SectionLoader />}>
                <ContentPage />
              </Suspense>
            ),
          },
          {
            path: 'system',
            element: (
              <Suspense fallback={<SectionLoader />}>
                <SystemPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: '/signin',
        element: (
          <Suspense fallback={<PageLoader />}>
            <SignInPage />
          </Suspense>
        ),
      },
    ]
  }
]);

export default function App() {
  return (
    <AppTheme>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </AppTheme>
  );
}
