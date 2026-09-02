import React from 'react';
import Box from '@mui/material/Box';
import { PageHeader, EmptyState } from '@repo/ui';
import { Video } from 'lucide-react';

export default function ContentPage() {
  return (
    <Box>
      <PageHeader 
        icon={<Video size={32} />}
        title="Content Hub"
        description="Manage video streams, lessons, and interactive assignments."
      />
      <EmptyState 
        icon={<Video size={48} />}
        title="Content registry empty"
        description="Upload video assets or create interactive assignments."
        actionText="Upload Asset"
        onAction={() => {}}
      />
    </Box>
  );
}
