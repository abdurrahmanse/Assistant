import { useRouteError, isRouteErrorResponse } from 'react-router';
import ErrorFallback from '@repo/ui/components/ErrorFallback';

export default function RouteError() {
  const error = useRouteError();
  let errorMessage = 'An unexpected error occurred.';

  if (isRouteErrorResponse(error)) {
    errorMessage = error.data?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  }

  return <ErrorFallback errorMessage={errorMessage} />;
}
