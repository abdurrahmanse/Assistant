import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ErrorBoundary } from '@repo/ui/components/ErrorBoundary';

const HomePage = React.lazy(() => import('@/pages/HomePage'));
const CoursesPage = React.lazy(() => import('@/pages/CoursesPage'));
const CourseDetailPage = React.lazy(() => import('@/pages/CourseDetailPage'));
const ContactPage = React.lazy(() => import('@/pages/ContactPage'));
const AboutPage = React.lazy(() => import('@/pages/AboutPage'));
const NotFoundPage = React.lazy(() => import('@/pages/NotFoundPage'));


const PageLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
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
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:id" element={<CourseDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
