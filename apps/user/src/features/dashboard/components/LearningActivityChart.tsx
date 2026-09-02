import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { Activity } from 'lucide-react';

export function LearningActivityChart() {
  return (
    <Paper variant="outlined" sx={{ p: 4, height: '100%', borderRadius: '24px', border: '1px solid', borderColor: 'divider', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column' }}>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Box>
          <Typography variant="h6" fontWeight={800} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Activity size={20} color="var(--template-palette-primary-main)" /> Learning Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">Hours spent learning over the last 7 days</Typography>
        </Box>
      </Stack>
      <Box sx={{ width: '100%', flexGrow: 1, minHeight: 250 }}>
        <BarChart
          series={[{ data: [1.2, 2.5, 0.8, 4.2, 3.1, 1.5, 2.0], color: 'var(--template-palette-primary-main)' }]}
          xAxis={[{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          borderRadius={6}
        />
      </Box>
    </Paper>
  );
}
