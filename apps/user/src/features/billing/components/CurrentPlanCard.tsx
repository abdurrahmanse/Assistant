import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Card } from '@repo/ui';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

interface PlanDetails {
  name: string;
  status: string;
  renewalDate: string;
  price: string;
  features: string[];
}

export function CurrentPlanCard({ plan }: { plan: PlanDetails }) {
  return (
    <Card sx={{ p: 4, borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
      <Typography variant="subtitle2" fontWeight={800} color="primary.main" textTransform="uppercase" letterSpacing={1} mb={2}>
        Current Plan
      </Typography>
      
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="flex-start" mb={4}>
        <Box>
          <Typography variant="h4" fontWeight={900} mb={1}>{plan.name}</Typography>
          <Stack direction="row" alignItems="center" spacing={1} color="success.main" mb={2}>
            <CheckCircle2 size={18} />
            <Typography variant="subtitle2" fontWeight={700}>Status: {plan.status}</Typography>
          </Stack>
        </Box>
        <Typography variant="h5" fontWeight={800}>{plan.price}</Typography>
      </Stack>

      <Divider sx={{ mb: 4 }} />
      
      <Typography variant="subtitle2" fontWeight={700} mb={2}>Plan Benefits:</Typography>
      <Stack spacing={2} mb={4}>
        {plan.features.map((feature, i) => (
          <Stack key={i} direction="row" alignItems="center" spacing={2}>
            <CheckCircle2 size={16} color="#10b981" />
            <Typography variant="body1" fontWeight={600}>{feature}</Typography>
          </Stack>
        ))}
      </Stack>

      <Box sx={{ p: 3, bgcolor: 'warning.50', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
        <AlertCircle size={24} color="#f59e0b" />
        <Typography variant="body2" fontWeight={600} color="warning.dark">
          Your subscription will automatically renew on <strong>{plan.renewalDate}</strong>.
        </Typography>
      </Box>

      <Stack direction="row" spacing={2}>
        <Button variant="primary">Extend Subscription</Button>
        <Button variant="outline">Cancel Plan</Button>
      </Stack>
    </Card>
  );
}
