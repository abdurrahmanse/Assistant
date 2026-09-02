import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Skeleton } from '@repo/ui';

export function CourseCardSkeleton() {
  return (
    <Box sx={(theme) => ({
      height: '100%', display: 'flex', flexDirection: 'column',
      borderRadius: '24px', 
      border: '2px solid', 
      borderColor: 'rgba(0,0,0,0.1)',
      bgcolor: 'rgba(255,255,255,0.6)',
      ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
      backdropFilter: 'blur(24px)',
      overflow: 'hidden',
      position: 'relative'
    })}>
      <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', p: 1.5 }}>
        <Skeleton variant="rectangular" sx={{ width: '100%', height: '100%', borderRadius: '16px' }} />
        
        {/* Playful Floating Icon Skeleton */}
        <Box sx={{ 
          position: 'absolute', bottom: -8, left: 24, 
          width: 52, height: 52, borderRadius: '16px',
          border: '2px solid #000', boxShadow: '4px 4px 0px #000',
          bgcolor: 'background.paper', overflow: 'hidden'
        }}>
           <Skeleton variant="rectangular" sx={{ width: '100%', height: '100%' }} />
        </Box>
      </Box>

      <Box sx={{ p: 3, pt: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Skeleton variant="text" width="30%" height={20} sx={{ mb: 1 }} />
        
        <Skeleton variant="text" width="90%" height={32} sx={{ mb: 0.5 }} />
        <Skeleton variant="text" width="70%" height={32} sx={{ mb: 1.5 }} />
        
        <Skeleton variant="text" width="100%" height={20} />
        <Skeleton variant="text" width="100%" height={20} sx={{ mb: 3 }} />
        
        <Box sx={(theme) => ({ borderTop: '2px dashed', borderColor: 'rgba(0,0,0,0.1)', ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)' }), pt: 2, mt: 'auto' })}>
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
            <Stack direction="row" spacing={2}>
               <Skeleton variant="rectangular" width={40} height={24} sx={{ borderRadius: 1 }} />
               <Skeleton variant="rectangular" width={40} height={24} sx={{ borderRadius: 1 }} />
            </Stack>
            <Skeleton variant="rectangular" width={60} height={32} sx={{ borderRadius: 1 }} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
