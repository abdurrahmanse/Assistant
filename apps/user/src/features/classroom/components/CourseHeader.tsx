import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { ChevronLeft, Terminal, Activity } from 'lucide-react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

interface CourseHeaderProps {
  title: string;
  onBack: () => void;
}

export function CourseHeader({ title, onBack }: CourseHeaderProps) {
  return (
    <Box sx={(theme) => ({ 
      py: 2, 
      borderBottom: '1px solid', 
      borderColor: alpha(theme.palette.divider, 0.5), 
      bgcolor: 'background.paper',
      ...theme.applyStyles('dark', { bgcolor: '#0b0f19' })
    })}>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button 
            startIcon={<ChevronLeft size={16} />} 
            onClick={onBack} 
            sx={{ 
              color: 'text.secondary', p: 0, textTransform: 'uppercase', letterSpacing: 0.5,
              '&:hover': { bgcolor: 'transparent', color: brand[500] } 
            }}
          >
            Exit Workspace
          </Button>
          <Divider orientation="vertical" flexItem sx={{ height: 24, alignSelf: 'center' }} />
          <Terminal size={18} color={brand[500]} />
          <Typography variant="subtitle1" fontWeight={700} sx={{ letterSpacing: '-0.01em' }}>{title}</Typography>
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1.5} sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Activity size={16} color="#10b981" />
          <Typography variant="caption" sx={{ color: '#10b981', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
            Kernel Active
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
