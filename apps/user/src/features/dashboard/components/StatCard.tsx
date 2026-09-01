import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

export function StatCard({ label, value, icon, color }: StatCardProps) {
  return (
    <Paper variant="outlined" sx={{ p: 3, borderRadius: '20px', display: 'flex', alignItems: 'center', gap: 3, border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
      <Box sx={{ p: 2, borderRadius: '16px', bgcolor: `${color}15`, color: color, display: 'flex' }}>
        {icon}
      </Box>
      <Box>
        <Typography variant="h4" fontWeight={900} sx={{ lineHeight: 1 }}>{value}</Typography>
        <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>{label}</Typography>
      </Box>
    </Paper>
  );
}

