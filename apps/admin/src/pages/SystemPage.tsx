import React from 'react';
import Box from '@mui/material/Box';
import { PageHeader, EmptyState } from '@repo/ui';
import { Settings } from 'lucide-react';

export default function SystemPage() {
  return (
    <Box>
      <PageHeader 
        icon={<Settings size={32} />}
        title="System Operations"
        description="Configure global navigation, coupons, and system settings."
      />
      <EmptyState 
        icon={<Settings size={48} />}
        title="System optimal"
        description="No configuration warnings or errors detected."
        actionText="View System Logs"
        onAction={() => {}}
      />
    </Box>
  );
}
