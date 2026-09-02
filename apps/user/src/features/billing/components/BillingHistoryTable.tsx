import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button, Card } from '@repo/ui';
import { EmptyState } from '@/components/ui/EmptyState';
import { FileText } from 'lucide-react';

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: string;
}

export function BillingHistoryTable({ invoices }: { invoices: Invoice[] }) {
  return (
    <Card sx={{ p: 4, borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
      <Typography variant="subtitle2" fontWeight={800} mb={3}>Billing History</Typography>
      
      {!invoices || invoices.length === 0 ? (
        <EmptyState 
          icon={<FileText size={40} />} 
          title="No billing history" 
          description="You have not made any transactions yet. Your invoices will appear here." 
        />
      ) : (
        <>
          <Stack spacing={2}>
            {invoices.map((inv, i) => (
              <Stack key={i} direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" pb={2} borderBottom={i === invoices.length - 1 ? 'none' : '1px solid'} borderColor="divider">
                <Box>
                  <Typography variant="subtitle2" fontWeight={700}>{inv.date}</Typography>
                  <Typography variant="caption" color="text.secondary">{inv.id}</Typography>
                </Box>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle2" fontWeight={700}>{inv.amount}</Typography>
                  <Typography variant="caption" color="success.main" fontWeight={700}>{inv.status}</Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
          <Button variant="ghost" fullWidth sx={{ mt: 2 }}>Download All Invoices</Button>
        </>
      )}
    </Card>
  );
}
