import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import type { StatItem } from '@/interfaces';
import { alpha } from '@mui/material/styles';
import { brand } from '@repo/ui/shared-theme/themePrimitives';

interface StatGridBentoProps {
  stats: StatItem[];
}

export function StatGridBento({ stats }: StatGridBentoProps) {
  return (
    <Box 
      sx={(theme) => ({
        height: '100%',
        bgcolor: 'background.paper',
        borderRadius: '16px',
        border: '1px solid',
        borderColor: 'divider',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        boxShadow: `0 4px 20px rgba(0,0,0,0.02)`
      })}
    >
      <Typography variant="h6" fontWeight={700} mb={3} >Execution Metrics</Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        {stats.map((stat, i) => (
          <Grid size={{ xs: 6 }} key={i}>
            <Box 
              sx={{ 
                p: 2.5, 
                height: '100%', 
                borderRadius: '12px', 
                bgcolor: 'background.default',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                border: '1px solid',
                borderColor: 'divider',
                transition: 'all 0.2s',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': { transform: 'translateY(-2px)', borderColor: stat.color || brand[500], boxShadow: `0 4px 12px ${alpha(stat.color || brand[500], 0.1)}` }
              }}
            >
              <Box sx={{ position: 'absolute', top: 0, right: 0, w: 20, h: 20, background: `radial-gradient(circle, ${alpha(stat.color || brand[500], 0.2)} 0%, transparent 70%)` }} />
              
              <Box sx={{ color: stat.color || brand[500], mb: 1.5, p: 1, bgcolor: alpha(stat.color || brand[500], 0.1), borderRadius: '8px', width: 'fit-content' }}>
                {stat.icon}
              </Box>
              <Typography variant="h4" fontWeight={700} sx={{ letterSpacing: '-0.02em', mb: 0.5 }}>
                {stat.value}
              </Typography>
              <Typography variant="caption" color="text.secondary" fontWeight={600}  sx={{ textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.65rem' }}>
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
