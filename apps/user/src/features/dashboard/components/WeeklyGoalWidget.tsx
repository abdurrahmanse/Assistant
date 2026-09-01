import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface WeeklyGoalWidgetProps {
  currentDays: number;
  goalDays: number;
  message: string;
}

export function WeeklyGoalWidget({ currentDays, goalDays, message }: WeeklyGoalWidgetProps) {
  const percentage = Math.min((currentDays / goalDays) * 100, 100);
  
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
      <Typography variant="h6" fontWeight={800} mb={1}>Weekly Goal</Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>{message}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
        <Box sx={{ flexGrow: 1, height: 8, bgcolor: 'divider', borderRadius: 4, overflow: 'hidden' }}>
          <Box sx={{ width: `${percentage}%`, height: '100%', bgcolor: '#f97316', borderRadius: 4 }} />
        </Box>
        <Typography variant="subtitle2" fontWeight={800} color="#f97316">{currentDays}/{goalDays} Days</Typography>
      </Box>
    </Paper>
  );
}

