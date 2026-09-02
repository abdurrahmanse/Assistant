import React from 'react';
import Box from '@mui/material/Box';
import { PageHeader, EmptyState } from '@repo/ui';
import { Users } from 'lucide-react';

export default function UsersPage() {
  return (
    <Box>
      <PageHeader 
        icon={<Users size={32} />}
        title="Member Management"
        description="Manage students, instructors, and system administrators."
      />
      <EmptyState 
        icon={<Users size={48} />}
        title="No users found"
        description="The user database is currently empty or still indexing."
        actionText="Provision User"
        onAction={() => {}}
      />
    </Box>
  );
}
