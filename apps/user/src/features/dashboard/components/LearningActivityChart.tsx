import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { Activity, TerminalSquare } from 'lucide-react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

export function LearningActivityChart() {
  return (
    <Paper variant="outlined" sx={{ p: 4, height: '100%', borderRadius: '16px', border: '1px solid', borderColor: 'divider', boxShadow: `0 4px 20px rgba(0,0,0,0.02)`, display: 'flex', flexDirection: 'column' }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Box>
          <Typography variant="h6" fontWeight={700} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <TerminalSquare size={20} color={brand[500]} /> Compute Usage (Hours)
          </Typography>
          <Typography variant="body2" color="text.secondary" >Active learning sessions over the last 7 days</Typography>
        </Box>
      </Stack>
      <Box sx={{ width: '100%', flexGrow: 1, minHeight: 250 }}>
        <BarChart
          series={[{ data: [1.2, 2.5, 0.8, 4.2, 3.1, 1.5, 2.0], color: brand[500] }]}
          xAxis={[{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          borderRadius={4}
          sx={{
            '& .MuiBarElement-root': {
              fill: `url(#gradient)`,
            },
          }}
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor={alpha(brand[600], 0.8)} />
              <stop offset="100%" stopColor={brand[400]} />
            </linearGradient>
          </defs>
        </BarChart>
      </Box>
    </Paper>
  );
}
