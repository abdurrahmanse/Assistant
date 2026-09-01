import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useSearchParams } from 'react-router';

export default function PlanSelection() {
  const [searchParams] = useSearchParams();
  const courseSlug = searchParams.get('course');
  const [selectedPlan, setSelectedPlan] = useState<'single' | 'subscription'>('single');

  return (
    <Stack spacing={4}>
      <Box>
        <Typography variant="h5" fontWeight={900} mb={1}>Choose your plan</Typography>
        <Typography variant="body2" color="text.secondary">
          Get lifetime access to this course, or subscribe for unlimited access to the entire library.
        </Typography>
      </Box>

      <Stack spacing={3}>
        <Box 
          onClick={() => setSelectedPlan('single')}
          sx={{ 
            p: 3, 
            borderRadius: '16px', 
            border: '2px solid', 
            borderColor: selectedPlan === 'single' ? 'primary.main' : 'divider',
            bgcolor: selectedPlan === 'single' ? 'primary.50' : 'background.paper',
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.50' }
          }}
        >
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="subtitle1" fontWeight={800}>Single Course</Typography>
              <Typography variant="body2" color="text.secondary">Lifetime access to "{courseSlug || 'this course'}"</Typography>
            </Box>
            <Typography variant="h5" fontWeight={900}>$99.00</Typography>
          </Stack>
        </Box>

        <Box 
          onClick={() => setSelectedPlan('subscription')}
          sx={{ 
            p: 3, 
            borderRadius: '16px', 
            border: '2px solid', 
            borderColor: selectedPlan === 'subscription' ? 'primary.main' : 'divider',
            bgcolor: selectedPlan === 'subscription' ? 'primary.50' : 'background.paper',
            cursor: 'pointer',
            transition: 'all 0.2s',
            position: 'relative',
            '&:hover': { borderColor: 'primary.main', bgcolor: 'primary.50' }
          }}
        >
          <Box sx={{ position: 'absolute', top: -12, right: 24, bgcolor: 'primary.main', color: '#fff', px: 1.5, py: 0.5, borderRadius: '8px', fontSize: '0.75rem', fontWeight: 800 }}>BEST VALUE</Box>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Box>
              <Typography variant="subtitle1" fontWeight={800}>Pro Subscription</Typography>
              <Typography variant="body2" color="text.secondary">Unlimited access to all courses, premium support, and downloads.</Typography>
            </Box>
            <Box textAlign="right">
              <Typography variant="h5" fontWeight={900}>$19.00</Typography>
              <Typography variant="caption" color="text.secondary">per month</Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

