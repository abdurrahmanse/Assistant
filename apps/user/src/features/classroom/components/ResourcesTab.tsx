import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { Download, FileText } from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  size: string;
}

interface ResourcesTabProps {
  resources: Resource[];
}

export function ResourcesTab({ resources }: ResourcesTabProps) {
  return (
    <Stack spacing={2}>
      {resources.map((res) => (
        <Stack key={res.id} direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: '12px' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Box sx={{ p: 1, bgcolor: 'primary.50', color: 'primary.main', borderRadius: '8px' }}>
              <FileText size={20} />
            </Box>
            <Box>
              <Typography variant="subtitle2" fontWeight={700}>{res.title}</Typography>
              <Typography variant="caption" color="text.secondary">{res.size}</Typography>
            </Box>
          </Stack>
          <Button startIcon={<Download size={16} />} variant="outline" size="small" sx={{ borderRadius: '8px' }}>Download</Button>
        </Stack>
      ))}
    </Stack>
  );
}

