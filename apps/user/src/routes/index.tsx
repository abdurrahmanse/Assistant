import { ProtectedRoute } from '@/components/ProtectedRoute';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router';

// Lazy loaded pages
const SignInSide = React.lazy(() => import('@/pages/SignInPage'));
const SignUp = React.lazy(() => import('@/pages/SignUpPage'));
const Checkout = React.lazy(() => import('@/pages/CheckoutPage'));
const MyLearning = React.lazy(() => import('@/pages/MyLearningPage'));
const CoursePlayer = React.lazy(() => import('@/pages/CoursePlayerPage'));
const CoursesPage = React.lazy(() => import('@/pages/CoursesPage'));
const Settings = React.lazy(() => import('@/pages/SettingsPage'));
const AssignmentsPage = React.lazy(() => import('@/pages/AssignmentsPage'));
const MarksPage = React.lazy(() => import('@/pages/MarksPage'));
const CertificatesPage = React.lazy(() => import('@/pages/CertificatesPage'));
const RankingsPage = React.lazy(() => import('@/pages/RankingsPage'));
const ProfilePage = React.lazy(() => import('@/pages/ProfilePage'));
const BillingPage = React.lazy(() => import('@/pages/BillingPage'));

const PageLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
    <CircularProgress />
  </Box>
);

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <Component />
  </Suspense>
);

const withProtectedSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<PageLoader />}>
    <ProtectedRoute>
      <Component />
    </ProtectedRoute>
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  // Public Routes
  {
    path: '/signin',
    element: withSuspense(SignInSide),
  },
  {
    path: '/signup',
    element: withSuspense(SignUp),
  },
  // Protected Routes
  {
    path: '/home',
    element: withProtectedSuspense(MyLearning),
  },
  {
    path: '/courses',
    element: withProtectedSuspense(CoursesPage),
  },
  {
    path: '/courses/:slug',
    element: withProtectedSuspense(CoursePlayer),
  },
  {
    path: '/checkout',
    element: withProtectedSuspense(Checkout),
  },
  {
    path: '/assignments',
    element: withProtectedSuspense(AssignmentsPage),
  },
  {
    path: '/marks',
    element: withProtectedSuspense(MarksPage),
  },
  {
    path: '/certificates',
    element: withProtectedSuspense(CertificatesPage),
  },
  {
    path: '/rankings',
    element: withProtectedSuspense(RankingsPage),
  },
  {
    path: '/profile',
    element: withProtectedSuspense(ProfilePage),
  },
  {
    path: '/settings',
    element: withProtectedSuspense(Settings),
  },
  {
    path: '/billing',
    element: withProtectedSuspense(BillingPage),
  },
  // Catch-all
  {
    path: '*',
    element: <Navigate to="/home" replace />,
  },
]);

