import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { CheckCircle2, AlertCircle, Target, Lightbulb, Users, ListChecks } from 'lucide-react';
import type { CourseItem } from '@repo/api-client';
import { useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';

export interface CourseOverviewProps {
  course: CourseItem;
  copy: NonNullable<ReturnType<typeof useCourseDetailQuery>['data']>;
}

export function CourseOverview({ course, copy }: CourseOverviewProps) {
  return (
    <Box>
      <Grid container spacing={6}>
        {/* Left Column: Outcomes & Target Audience */}
        <Grid size={{ xs: 12, md: 7 }}>
          {course.outcomes && course.outcomes.length > 0 && (
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 900, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Lightbulb size={32} color="#f59e0b" /> {copy.outcomesHeading}
              </Typography>
              <Grid container spacing={2}>
                {course.outcomes.map((outcome, i) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={i}>
                    <Stack direction="row" spacing={1.5} alignItems="flex-start">
                      <Box sx={{ color: 'success.main', mt: 0.2 }}>
                        <CheckCircle2 size={20} />
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                        {outcome}
                      </Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}

          {course.targetAudience && (
            <Box sx={{ mb: 6 }}>
              <Typography variant="h4" sx={{ fontWeight: 900, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Users size={32} color="#ec4899" /> {copy.targetAudienceHeading}
              </Typography>
              <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ p: 3, bgcolor: 'background.paper', borderRadius: '16px', border: '1px solid', borderColor: 'divider' }}>
                <Box sx={{ color: 'primary.main' }}>
                  <Target size={28} />
                </Box>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                  {course.targetAudience}
                </Typography>
              </Stack>
            </Box>
          )}
        </Grid>

        {/* Right Column: Prerequisites */}
        <Grid size={{ xs: 12, md: 5 }}>
          {course.prerequisites && course.prerequisites.length > 0 && (
            <Box sx={{ p: 4, borderRadius: '24px', bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h5" sx={{ fontWeight: 900, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <ListChecks size={28} color="#8b5cf6" /> {copy.prerequisitesHeading}
              </Typography>
              <Stack spacing={2}>
                {course.prerequisites.map((req, i) => (
                  <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                    <Box sx={{ color: 'warning.main', mt: 0.2 }}>
                      <AlertCircle size={20} />
                    </Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.secondary' }}>
                      {req}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
