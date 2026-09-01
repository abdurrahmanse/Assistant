import CssBaseline from '@mui/material/CssBaseline';
import { ErrorBoundary } from '@repo/ui/components/ErrorBoundary';
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  return (
    <ErrorBoundary>
      <CssBaseline enableColorScheme />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
