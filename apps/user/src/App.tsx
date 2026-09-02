import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from '@repo/ui/components/ErrorBoundary';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import AppTheme from '@repo/ui/shared-theme/AppTheme';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <ErrorBoundary>
      <AppTheme>
        <Toaster position="top-center" richColors />
        <CssBaseline enableColorScheme />
        <RouterProvider router={router} />
      </AppTheme>
    </ErrorBoundary>
  );
}
