import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

interface ErrorFallbackProps {
  errorMessage?: string;
}

export default function ErrorFallback({ errorMessage = 'An unexpected error occurred.' }: ErrorFallbackProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom sx={{ mt: 2, fontWeight: 'bold' }}>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500 }}>
        {errorMessage}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => window.location.href = '/'}>
        Return to Safety
      </Button>
    </Box>
  );
}
