import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { ChevronLeft } from 'lucide-react';

interface CourseHeaderProps {
  title: string;
  onBack: () => void;
}

export function CourseHeader({ title, onBack }: CourseHeaderProps) {
  return (
    <Box sx={{ py: 2, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Button startIcon={<ChevronLeft size={16} />} onClick={onBack} sx={{ color: 'text.secondary', p: 0, '&:hover': { bgcolor: 'transparent', color: 'primary.main' } }}>Back to Learning</Button>
          <Divider orientation="vertical" flexItem sx={{ height: 24, alignSelf: 'center' }} />
          <Typography variant="subtitle1" fontWeight={800}>{title}</Typography>
        </Stack>
      </Container>
    </Box>
  );
}

