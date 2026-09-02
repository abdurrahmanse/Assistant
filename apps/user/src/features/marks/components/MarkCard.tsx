import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Target, CheckCircle2 } from 'lucide-react';
import type { Mark } from '@/interfaces';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface MarkCardProps {
  mark: Mark;
}

export function MarkCard({ mark }: MarkCardProps) {
  const percentage = Math.round((mark.score / mark.total) * 100);
  return (
    <Box sx={(theme) => ({
      height: '100%', display: 'flex', flexDirection: 'column',
      borderRadius: '16px', p: 4,
      border: '1px solid', borderColor: alpha(theme.palette.divider, 0.5),
      bgcolor: 'background.paper',
      ...theme.applyStyles('dark', { borderColor: alpha(theme.palette.divider, 0.2), bgcolor: '#0b0f19' }),
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      position: 'relative',
      boxShadow: `0 4px 20px rgba(0,0,0,0.02)`,
      overflow: 'hidden',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: `0 12px 32px ${alpha('#10b981', 0.15)}`,
        borderColor: alpha('#10b981', 0.4),
      }
    })}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value={percentage} sx={{ color: percentage >= 90 ? '#10b981' : brand[500] }} size={60} thickness={5} />
          <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="caption" component="div" fontWeight={700}>{`${percentage}%`}</Typography>
          </Box>
        </Box>
        <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: alpha('#10b981', 0.1), color: '#10b981', display: 'flex', height: 'fit-content', border: `1px solid ${alpha('#10b981', 0.2)}` }}>
          <Target size={24} />
        </Box>
      </Box>
      <Typography variant="caption" sx={{ color: brand[500], fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, mb: 1 }}>
        {mark.course}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
        {mark.title}
      </Typography>
      
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3, mt: 'auto', color: 'text.secondary' }}>
        <CheckCircle2 size={16} />
        <Typography variant="body2" fontWeight={500}>Evaluated on: {mark.date}</Typography>
      </Stack>
      
      <Button variant="outline" fullWidth>View Evaluation Logs</Button>
    </Box>
  );
}
