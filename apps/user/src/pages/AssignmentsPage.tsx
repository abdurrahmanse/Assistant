import React from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { PageHeader } from '@/components/PageHeader';
import { AssignmentCard } from '@/features/assignments/components/AssignmentCard';
import { mockAssignments } from '@/data/mock';

export default function AssignmentsPage() {
  return (
    <StudentLayout>
      <PageHeader 
        title="Assignments" 
        subtitle="Track your coursework and upcoming deadlines." 
      />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {mockAssignments.map((assignment) => (
            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={assignment.id}>
              <AssignmentCard assignment={assignment} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}
