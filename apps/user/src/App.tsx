import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const SignInSide = React.lazy(() => import('@/pages/SignInPage'));
const SignUp = React.lazy(() => import('@/pages/SignUpPage'));
const Checkout = React.lazy(() => import('@/pages/CheckoutPage'));
const MyLearning = React.lazy(() => import('@/pages/MyLearningPage'));
const CoursePlayer = React.lazy(() => import('@/pages/CoursePlayerPage'));
const Settings = React.lazy(() => import('@/pages/SettingsPage'));

const PageLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', bgcolor: 'background.default' }}>
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
        element: <Navigate to="/home" replace />,
      },
      {
        path: '/signin',
        element: (
          <Suspense fallback={<PageLoader />}>
            <SignInSide />
          </Suspense>
        ),
      },
      {
        path: '/signup',
        element: (
          <Suspense fallback={<PageLoader />}>
            <SignUp />
          </Suspense>
        ),
      },
      {
        path: '/checkout',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: '/home',
        element: (
          <Suspense fallback={<PageLoader />}>
            <MyLearning />
          </Suspense>
        ),
      },
      {
        path: '/courses/:id',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CoursePlayer />
          </Suspense>
        ),
      },
      {
        path: '/settings',
        element: (
          <Suspense fallback={<PageLoader />}>
            <Settings />
          </Suspense>
        ),
      },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
