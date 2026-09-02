import React from 'react';
import { Outlet } from 'react-router';
import Box from '@mui/material/Box';
import { Sidebar } from './Sidebar';

export default function AdminLayout() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <Sidebar />
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          ml: { xs: 0, lg: '280px' },
          width: { xs: '100%', lg: 'calc(100% - 280px)' },
          p: { xs: 3, md: 6 }
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
