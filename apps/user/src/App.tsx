import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from '@repo/ui/components/ErrorBoundary';
import React, { Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router';

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

const PageLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', bgcolor: 'background.default' }}>
    <CircularProgress />
  </Box>
);

export default function App() {
  return (
    <ErrorBoundary>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/signin" element={<SignInSide />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/home" element={<MyLearning />} />
            <Route path="/assignments" element={<AssignmentsPage />} />
            <Route path="/marks" element={<MarksPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CoursePlayer />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
