import React, { Suspense } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { ErrorBoundary } from '@repo/ui/components/ErrorBoundary';

const HomePage = React.lazy(() => import('@/pages/HomePage'));

const PageLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
    <CircularProgress />
  </Box>
);

export default function App() {
  return (
    <ErrorBoundary>
      <CssBaseline enableColorScheme />
      <Suspense fallback={<PageLoader />}>
        <HomePage />
      </Suspense>
    </ErrorBoundary>
  );
}
