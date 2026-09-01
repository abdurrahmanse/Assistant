import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Card } from '@repo/ui';
import { CreditCard } from 'lucide-react';

export function PaymentMethodCard() {
  return (
    <Card sx={{ p: 4, borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
      <Typography variant="subtitle2" fontWeight={800} mb={3}>Payment Method</Typography>
      <Stack direction="row" alignItems="center" spacing={2} p={2} border="1px solid" borderColor="divider" borderRadius="12px" mb={3}>
        <Box sx={{ p: 1.5, bgcolor: 'primary.50', color: 'primary.main', borderRadius: '8px' }}>
          <CreditCard size={20} />
        </Box>
        <Box flexGrow={1}>
          <Typography variant="subtitle2" fontWeight={700}>Visa ending in 4242</Typography>
          <Typography variant="caption" color="text.secondary">Expires 12/28</Typography>
        </Box>
      </Stack>
      <Button variant="outline" fullWidth>Update Payment Method</Button>
    </Card>
  );
}
