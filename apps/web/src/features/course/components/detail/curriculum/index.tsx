import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Button } from '@repo/ui';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { PlayCircle, ChevronDown, BookOpen } from 'lucide-react';
import type { CourseItem } from '@repo/api-client';
import { useCourseDetailQuery } from '@/features/landing/hooks/queries/useLandingQuery';

export interface CourseCurriculumProps {
  course: CourseItem;
  copy: NonNullable<ReturnType<typeof useCourseDetailQuery>['data']>;
  totalLessons: number;
}

export function CourseCurriculum({ course, copy, totalLessons }: CourseCurriculumProps) {
  return (
    <>
      <Typography variant="h3" sx={{ fontWeight: 900, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}><BookOpen size={36} color="#3b82f6" /> {copy.curriculumHeading}</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 6 }}>
        {copy.curriculumMeta
          .replace('{sections}', String(course.modules?.length ?? 0))
          .replace('{lessons}', String(totalLessons))
          .replace('{duration}', course.duration ?? '')}
      </Typography>
      <Stack spacing={2}>
        {(course.modules ?? []).map((mod, i) => (
          <Accordion key={i} elevation={0} sx={{ bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider', borderRadius: '16px !important', '&:before': { display: 'none' }, '&.Mui-expanded': { borderColor: 'primary.main' } }}>
            <AccordionSummary expandIcon={<ChevronDown />} sx={{ py: 1.5, px: 3 }}>
              <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', pr: 2, alignItems: 'center' }}>
                <Stack direction="row" alignItems="center" spacing={2.5}>
                  <Box sx={{ width: 40, height: 40, borderRadius: '10px', bgcolor: 'primary.main', color: 'primary.contrastText', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="subtitle2" fontWeight={800}>{i + 1}</Typography>
                  </Box>
                  <Typography variant="subtitle1" sx={{ fontWeight: 800 }}>{mod.title}</Typography>
                </Stack>
                <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' }, whiteSpace: 'nowrap', fontWeight: 600 }}>
                  {mod.lessons} lessons · {mod.duration}
                </Typography>
              </Stack>
            </AccordionSummary>
            <AccordionDetails sx={{ pt: 0, px: 3, pb: 3 }}>
              <Stack spacing={2} sx={{ pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                {Array.from({ length: Math.min(mod.lessons, 4) }).map((_, j) => (
                  <Stack key={j} direction="row" alignItems="center" spacing={2} sx={{ p: 1, borderRadius: '8px', '&:hover': { bgcolor: 'action.hover' } }}>
                    <PlayCircle size={18} color="#6366f1" />
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>Lesson {j + 1}: {mod.title} — Part {j + 1}</Typography>
                    <Typography variant="caption" color="text.disabled" sx={{ ml: 'auto' }}>12:00</Typography>
                  </Stack>
                ))}
                {mod.lessons > 4 && (
                  <Button variant="ghost" sx={{ width: 'fit-content', ml: 4, fontWeight: 700 }}>
                    + {mod.lessons - 4} more lessons
                  </Button>
                )}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </>
  );
}
