import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Badge as Chip } from '@repo/ui';

export interface CourseTagsProps {
  course?: any;
  copy?: any;
  isLoading?: boolean;
}

export function CourseTags({ course, copy, isLoading }: CourseTagsProps) {
  if (isLoading || !course?.tags || course.tags.length === 0) return null;

  return (
    <Box sx={{ borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider', py: 2 }}>
      <Container maxWidth="lg">
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1, alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary" fontWeight={600}>{copy?.topicsLabel}</Typography>
          {course.tags.map((tag: string) => (
            <Chip key={tag} label={tag} size="small" variant="outline" sx={{ fontWeight: 700, borderRadius: '6px' }} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
