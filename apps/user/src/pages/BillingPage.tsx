import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { CreditCard } from 'lucide-react';

import { PageHeader } from '@/components/ui/PageHeader';
import { MembershipStatusCard } from '@/features/billing/components/MembershipStatusCard';
import { PaymentMethodCard } from '@/features/billing/components/PaymentMethodCard';
import { BillingHistoryTable } from '@/features/billing/components/BillingHistoryTable';

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
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        <PageHeader 
          icon={<CreditCard size={32} />}
          title="Membership & Billing"
          description="Manage your membership, payment methods, and billing history."
        />

        <Grid container spacing={4}>
          {/* Left: Current Plan */}
          <Grid size={{ xs: 12, md: 7 }}>
            <MembershipStatusCard plan={currentPlan} />
          </Grid>

          {/* Right: Payment Method & Invoices */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={4}>
              <PaymentMethodCard />
              <BillingHistoryTable invoices={invoices} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </StudentLayout>
  );
}
