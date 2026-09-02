import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface WeeklyGoalWidgetProps {
  currentDays: number;
  goalDays: number;
  message: string;
}

export function WeeklyGoalWidget({ currentDays, goalDays, message }: WeeklyGoalWidgetProps) {
  const percentage = Math.min((currentDays / goalDays) * 100, 100);
  
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: '16px', border: '1px solid', borderColor: 'divider', boxShadow: `0 4px 20px rgba(0,0,0,0.02)` }}>
      <Typography variant="h6" fontWeight={700} mb={1} >Training Pipeline Target</Typography>
      <Typography variant="body2" color="text.secondary" mb={2} >{message}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
        <Box sx={{ flexGrow: 1, height: 8, bgcolor: 'divider', borderRadius: 4, overflow: 'hidden' }}>
          <Box sx={{ width: `${percentage}%`, height: '100%', bgcolor: brand[500], borderRadius: 4, boxShadow: `0 0 10px ${brand[500]}` }} />
        </Box>
        <Typography variant="subtitle2" fontWeight={600} color={brand[400]} >{currentDays}/{goalDays} Runs</Typography>
      </Box>
    </Paper>
  );
}
