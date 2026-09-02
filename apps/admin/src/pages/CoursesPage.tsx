import React from 'react';
import Box from '@mui/material/Box';
import { PageHeader, EmptyState } from '@repo/ui';
import { BookOpen } from 'lucide-react';

export default function CoursesPage() {
  return (
    <Box>
      <PageHeader 
        icon={<BookOpen size={32} />}
        title="Course Blueprints"
        description="Design and architect learning tracks and curriculums."
      />
      <EmptyState 
        icon={<BookOpen size={48} />}
        title="No blueprints available"
        description="Initialize a new course blueprint to begin curriculum design."
        actionText="Initialize Blueprint"
        onAction={() => {}}
      />
    </Box>
  );
}
