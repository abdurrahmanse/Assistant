import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import type { StatItem } from '../../../types';

interface StatGridBentoProps {
  stats: StatItem[];
}

export function StatGridBento({ stats }: StatGridBentoProps) {
  return (
    <Box 
      sx={(theme) => ({
        height: '100%',
        bgcolor: 'background.paper',
        borderRadius: '24px',
        border: '1px solid',
        borderColor: 'divider',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
      })}
    >
      <Typography variant="h6" fontWeight={800} mb={3}>Quick Stats</Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {stats.map((stat, i) => (
          <Grid size={{ xs: 6 }} key={i}>
            <Box 
              sx={{ 
                p: 2.5, 
                height: '100%', 
                borderRadius: '16px', 
                bgcolor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' }
              }}
            >
              <Box sx={{ color: stat.color, mb: 1, p: 1, bgcolor: `${stat.color}15`, borderRadius: '10px', width: 'fit-content' }}>
                {stat.icon}
              </Box>
              <Typography variant="h5" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 0.5 }}>
                {stat.value}
              </Typography>
              <Typography variant="caption" color="text.secondary" fontWeight={600}>
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

