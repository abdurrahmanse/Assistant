import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Badge as Chip } from '@repo/ui';
import { Clock, FileText } from 'lucide-react';

interface AssignmentCardProps {
  assignment: {
    id: string;
    course: string;
    title: string;
    status: string;
    dueDate: string;
    grade?: string | null;
  };
}

export function AssignmentCard({ assignment }: AssignmentCardProps) {
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
        boxShadow: '8px 8px 0px rgba(99,102,241,1)',
        borderColor: 'primary.main',
      }
    })}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Box sx={{ p: 1.5, borderRadius: '16px', bgcolor: 'primary.main', color: 'primary.contrastText', display: 'flex' }}>
          <FileText size={24} />
        </Box>
        <Chip 
          label={assignment.status} 
          size="small" 
          sx={{ 
            fontWeight: 800, borderRadius: '8px', 
            bgcolor: assignment.status === 'Graded' ? '#10b981' : assignment.status === 'Submitted' ? '#3b82f6' : '#f59e0b', 
            color: '#fff', textTransform: 'uppercase', letterSpacing: 0.5
          }} 
        />
      </Box>
      <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, mb: 1 }}>
        {assignment.course}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 900, mb: 2, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
        {assignment.title}
      </Typography>
      
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3, mt: 'auto', color: 'text.secondary' }}>
        <Clock size={16} />
        <Typography variant="body2" fontWeight={600}>Due: {assignment.dueDate}</Typography>
      </Stack>

      <Divider sx={{ mb: 3 }} />
      
      {assignment.status === 'Graded' ? (
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" fontWeight={700}>Grade</Typography>
          <Typography variant="h6" color="success.main" fontWeight={900}>{assignment.grade}</Typography>
        </Stack>
      ) : (
        <Button variant="primary" fullWidth disabled={assignment.status === 'Submitted'}>
          {assignment.status === 'Submitted' ? 'Under Review' : 'Start Assignment'}
        </Button>
      )}
    </Box>
  );
}
