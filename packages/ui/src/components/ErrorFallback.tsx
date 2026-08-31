import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { AlertTriangle, RotateCcw, Home } from 'lucide-react';

interface ErrorFallbackProps {
  errorMessage?: string;
}

export default function ErrorFallback({ errorMessage = 'An unexpected error occurred.' }: ErrorFallbackProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', p: 3, textAlign: 'center', position: 'relative', overflow: 'hidden', bgcolor: 'background.default' }}>
      {/* Background glowing shape */}
      <Box sx={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: { xs: 300, md: 500 }, aspectRatio: '1',
        background: 'radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(0,0,0,0) 70%)',
        zIndex: 0, pointerEvents: 'none'
      }} />

      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ 
          width: 80, height: 80, borderRadius: '50%', 
          bgcolor: 'rgba(239,68,68,0.1)', color: '#ef4444',
          display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 
        }}>
          <AlertTriangle size={40} />
        </Box>
        
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
          Something went wrong
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 500, fontSize: '1.1rem' }}>
          We encountered an unexpected error while trying to load this page. Our team has been notified.
        </Typography>

        {errorMessage && (
          <Box sx={{ p: 2, borderRadius: 2, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', mb: 4, maxWidth: 600, width: '100%', textAlign: 'left' }}>
            <Typography variant="caption" sx={{ color: 'text.disabled', textTransform: 'uppercase', fontWeight: 700, mb: 1, display: 'block' }}>Error Details</Typography>
            <Typography variant="body2" sx={{ fontFamily: 'monospace', color: 'error.main', wordBreak: 'break-word' }}>
              {errorMessage}
            </Typography>
          </Box>
        )}

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <Button 
            variant="contained" 
            size="large" 
            startIcon={<RotateCcw size={20} />}
            onClick={() => window.location.reload()}
            sx={{ fontWeight: 800, py: 1.5, px: 4, borderRadius: '12px', textTransform: 'none', bgcolor: 'text.primary', color: 'background.paper', '&:hover': { bgcolor: 'text.secondary' } }}
          >
            Try Again
          </Button>
          <Button 
            variant="outlined" 
            size="large" 
            startIcon={<Home size={20} />}
            onClick={() => window.location.href = '/'}
            sx={{ fontWeight: 700, py: 1.5, px: 4, borderRadius: '12px', textTransform: 'none', bgcolor: 'background.paper' }}
          >
            Back to Home
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
