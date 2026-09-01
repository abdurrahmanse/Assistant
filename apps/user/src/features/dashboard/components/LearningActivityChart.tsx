import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { Activity } from 'lucide-react';

interface LearningActivityChartProps {
  seriesData: number[];
  labels: string[];
}

export function LearningActivityChart({ seriesData, labels }: LearningActivityChartProps) {
  return (
    <Paper variant="outlined" sx={{ p: 4, height: '100%', borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
        <Box>
          <Typography variant="h6" fontWeight={800} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Activity size={20} color="var(--template-palette-primary-main)" /> Learning Activity
          </Typography>
          <Typography variant="body2" color="text.secondary">Hours spent learning over the last 7 days</Typography>
        </Box>
      </Stack>
      <Box sx={{ width: '100%', flexGrow: 1, minHeight: { xs: 250, md: 'auto' } }}>
        <BarChart
          series={[{ data: seriesData, color: 'var(--template-palette-primary-main)' }]}
          xAxis={[{ data: labels, scaleType: 'band' }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
          borderRadius={8}
        />
      </Box>
    </Paper>
  );
}

