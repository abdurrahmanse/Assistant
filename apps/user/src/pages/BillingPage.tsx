import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { AlertCircle, CheckCircle2, CreditCard } from 'lucide-react';

export default function BillingPage() {
  const currentPlan = {
    name: 'Pro Annual Membership',
    status: 'Active',
    renewalDate: 'Oct 15, 2026',
    price: '$199.00/year',
    features: ['Access to all courses', 'Priority Q&A Support', 'Exclusive Community Access', 'Downloadable Resources']
  };

  const invoices = [
    { id: 'INV-2025', date: 'Oct 15, 2025', amount: '$199.00', status: 'Paid' },
    { id: 'INV-2024', date: 'Oct 15, 2024', amount: '$199.00', status: 'Paid' },
  ];

  return (
    <StudentLayout>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 1 }}>
            Billing & Subscription
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500} mb={6}>
            Manage your membership, payment methods, and billing history.
          </Typography>

          <Grid container spacing={4}>
            {/* Left: Current Plan */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper variant="outlined" sx={{ p: 4, borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
                <Typography variant="subtitle2" fontWeight={800} color="primary.main" textTransform="uppercase" letterSpacing={1} mb={2}>
                  Current Plan
                </Typography>
                
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={4}>
                  <Box>
                    <Typography variant="h4" fontWeight={900} mb={1}>{currentPlan.name}</Typography>
                    <Stack direction="row" alignItems="center" spacing={1} color="success.main" mb={2}>
                      <CheckCircle2 size={18} />
                      <Typography variant="subtitle2" fontWeight={700}>Status: {currentPlan.status}</Typography>
                    </Stack>
                  </Box>
                  <Typography variant="h5" fontWeight={800}>{currentPlan.price}</Typography>
                </Stack>

                <Divider sx={{ mb: 4 }} />
                
                <Typography variant="subtitle2" fontWeight={700} mb={2}>Plan Benefits:</Typography>
                <Stack spacing={2} mb={4}>
                  {currentPlan.features.map((feature, i) => (
                    <Stack key={i} direction="row" alignItems="center" spacing={2}>
                      <CheckCircle2 size={16} color="#10b981" />
                      <Typography variant="body1" fontWeight={600}>{feature}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Box sx={{ p: 3, bgcolor: 'warning.50', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <AlertCircle size={24} color="#f59e0b" />
                  <Typography variant="body2" fontWeight={600} color="warning.dark">
                    Your subscription will automatically renew on <strong>{currentPlan.renewalDate}</strong>.
                  </Typography>
                </Box>

                <Stack direction="row" spacing={2}>
                  <Button variant="primary">Extend Subscription</Button>
                  <Button variant="outline">Cancel Plan</Button>
                </Stack>
              </Paper>
            </Grid>

            {/* Right: Payment Method & Invoices */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={4}>
                <Paper variant="outlined" sx={{ p: 4, borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
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
                </Paper>

                <Paper variant="outlined" sx={{ p: 4, borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
                  <Typography variant="subtitle2" fontWeight={800} mb={3}>Billing History</Typography>
                  <Stack spacing={2}>
                    {invoices.map((inv, i) => (
                      <Stack key={i} direction="row" justifyContent="space-between" alignItems="center" pb={2} borderBottom={i === invoices.length - 1 ? 'none' : '1px solid'} borderColor="divider">
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
                </Paper>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </StudentLayout>
  );
}

