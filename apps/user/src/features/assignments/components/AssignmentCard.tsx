import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Badge as Chip } from '@repo/ui';
import { Clock, Code2 } from 'lucide-react';
import type { Assignment } from '@/interfaces';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface AssignmentCardProps {
  assignment: Assignment;
}

export function AssignmentCard({ assignment }: AssignmentCardProps) {
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
        boxShadow: `0 12px 32px ${alpha(brand[500], 0.15)}`,
        borderColor: alpha(brand[400], 0.4),
      }
    })}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ p: 1.5, borderRadius: '12px', bgcolor: alpha(brand[500], 0.1), color: brand[500], display: 'flex', border: `1px solid ${alpha(brand[500], 0.2)}` }}>
          <Code2 size={24} />
        </Box>
        <Chip 
          label={assignment.status} 
          size="small" 
          sx={{ 
            fontWeight: 700, borderRadius: '6px', 
            bgcolor: assignment.status === 'Graded' ? '#10b981' : assignment.status === 'Submitted' ? '#3b82f6' : '#f59e0b', 
            color: '#fff', textTransform: 'uppercase', letterSpacing: 0.5, fontSize: '0.65rem'
          }} 
        />
      </Box>
      <Typography variant="caption" sx={{ color: brand[500], fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5, mb: 1 }}>
        {assignment.course}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
        {assignment.title}
      </Typography>
      
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3, mt: 'auto', color: 'text.secondary' }}>
        <Clock size={16} />
        <Typography variant="body2" fontWeight={500}>Deadline: {assignment.dueDate}</Typography>
      </Stack>

      <Divider sx={{ mb: 3 }} />
      
      {assignment.status === 'Graded' ? (
        <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center">
          <Typography variant="body2" fontWeight={600} color="text.secondary">Execution Score</Typography>
          <Typography variant="h6" color="#10b981" fontWeight={700}>{assignment.grade}</Typography>
        </Stack>
      ) : (
        <Button variant={assignment.status === 'Submitted' ? "outline" : "primary"} fullWidth disabled={assignment.status === 'Submitted'}>
          {assignment.status === 'Submitted' ? 'Validating Pipeline...' : 'Deploy Project'}
        </Button>
      )}
    </Box>
  );
}
