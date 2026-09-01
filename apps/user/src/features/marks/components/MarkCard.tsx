import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Award, CheckCircle2 } from 'lucide-react';
import type { Mark } from '../../../types';

interface MarkCardProps {
  mark: Mark;
}

export function MarkCard({ mark }: MarkCardProps) {
  const percentage = Math.round((mark.score / mark.total) * 100);
  return (
    <Box sx={(theme) => ({
      height: '100%', display: 'flex', flexDirection: 'column',
      borderRadius: '24px', p: 4,
      border: '2px solid', borderColor: 'rgba(0,0,0,0.1)',
      bgcolor: 'rgba(255,255,255,0.6)',
      ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
      backdropFilter: 'blur(24px)',
      transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '8px 8px 0px rgba(16,185,129,1)',
        borderColor: 'success.main',
      }
    })}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress variant="determinate" value={percentage} color={percentage >= 90 ? "success" : "primary"} size={60} thickness={5} />
          <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="caption" component="div" fontWeight={800}>{`${percentage}%`}</Typography>
          </Box>
        </Box>
        <Box sx={{ p: 1.5, borderRadius: '16px', bgcolor: 'success.main', color: 'success.contrastText', display: 'flex', height: 'fit-content' }}>
          <Award size={24} />
        </Box>
      </Box>
      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, mb: 1 }}>
        {mark.course}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
        {mark.title}
      </Typography>
      
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3, mt: 'auto', color: 'text.secondary' }}>
        <CheckCircle2 size={16} />
        <Typography variant="body2" fontWeight={600}>Graded on: {mark.date}</Typography>
      </Stack>
      
      <Button variant="outline" fullWidth>View Details</Button>
    </Box>
  );
}

