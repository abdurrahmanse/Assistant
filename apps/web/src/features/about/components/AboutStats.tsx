import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export interface AboutStatsProps {
  stats: {
    label: string;
    value: string;
  }[];
}

export function AboutStats({ stats }: AboutStatsProps) {
  return (
    <Grid container spacing={3} sx={{ mb: 12 }}>
      {stats.map((s) => (
        <Grid size={{ xs: 6, md: 3 }} key={s.label}>
          <Box sx={{ textAlign: 'center', p: 3, borderRadius: '20px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
            <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main' }}>{s.value}</Typography>
            <Typography variant="body2" color="text.secondary" fontWeight={600}>{s.label}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

