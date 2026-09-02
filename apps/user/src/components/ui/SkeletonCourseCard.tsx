import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export function SkeletonCourseCard() {
  return (
    <Card sx={{ 
      borderRadius: '24px', 
      overflow: 'hidden', 
      border: '1px solid', 
      borderColor: 'divider',
      boxShadow: '0 4px 20px rgba(0,0,0,0.02)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Skeleton variant="rectangular" width="100%" height={200} animation="wave" />
      <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack direction="row" spacing={1} mb={2}>
          <Skeleton variant="rounded" width={60} height={24} />
          <Skeleton variant="rounded" width={80} height={24} />
        </Stack>
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mb: 1 }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mb: 2, width: '80%' }} />
        
        <Box sx={{ mt: 'auto', pt: 3 }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <Skeleton variant="circular" width={32} height={32} />
              <Skeleton variant="text" width={80} />
            </Stack>
            <Skeleton variant="text" width={60} />
          </Stack>
        </Box>
      </Box>
    </Card>
  );
}
