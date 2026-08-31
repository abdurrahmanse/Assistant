import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { ChevronDown, PlayCircle, Lock } from 'lucide-react';
import { Skeleton } from '@repo/ui';

export interface CourseCurriculumProps {
  course?: any;
  copy?: any;
  totalLessons?: number;
  isLoading?: boolean;
}

export function CourseCurriculum({ course, copy, totalLessons, isLoading }: CourseCurriculumProps) {
  if (isLoading || !course || !copy) {
    return (
      <Box>
        <Skeleton variant="rectangular" width="40%" height={48} sx={{ mb: 2, borderRadius: 2 }} />
        <Skeleton width="60%" height={24} sx={{ mb: 6 }} />
        <Stack spacing={2}>
          {[1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} variant="rectangular" width="100%" height={72} sx={{ borderRadius: '16px' }} />
          ))}
        </Stack>
      </Box>
    );
  }

  return (
    <Box>
      <Box sx={{ mb: 6 }}>
        <Typography variant="h3" fontWeight={900} mb={2}>{copy.curriculumHeading || 'Course Curriculum'}</Typography>
        <Stack direction="row" spacing={2} color="text.secondary">
          <Typography variant="body1" fontWeight={600}>{(course.modules || []).length} modules</Typography>
          <Typography variant="body1">•</Typography>
          <Typography variant="body1" fontWeight={600}>{totalLessons} lessons</Typography>
          <Typography variant="body1">•</Typography>
          <Typography variant="body1" fontWeight={600}>{course.duration} total length</Typography>
        </Stack>
      </Box>

      <Box>
        {(course.modules || []).map((mod: any, i: number) => (
          <Accordion 
            key={i} 
            defaultExpanded={i === 0}
            sx={{ 
              mb: 2, 
              borderRadius: '16px !important',
              border: '1px solid',
              borderColor: 'divider',
              '&:before': { display: 'none' },
              boxShadow: 'none'
            }}
          >
            <AccordionSummary expandIcon={<ChevronDown />} sx={{ px: 3, py: 1 }}>
              <Box>
                <Typography variant="subtitle1" fontWeight={800}>{mod.title}</Typography>
                <Typography variant="body2" color="text.secondary">{mod.lessons} lessons</Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
              <Stack spacing={2}>
                {/* Mocked lessons - in reality this would come from the API */}
                {[1, 2, 3].map((lesson) => (
                  <Stack key={lesson} direction="row" spacing={2} alignItems="center" sx={{ p: 2, borderRadius: '8px', '&:hover': { bgcolor: 'action.hover' } }}>
                    {i === 0 && lesson === 1 ? (
                      <PlayCircle size={20} color="var(--template-palette-primary-main)" />
                    ) : (
                      <Lock size={20} color="var(--template-palette-text-secondary)" />
                    )}
                    <Typography variant="body2" fontWeight={600} sx={{ flex: 1 }}>Lesson {lesson}: Understanding the core concepts</Typography>
                    <Typography variant="body2" color="text.secondary">10:00</Typography>
                  </Stack>
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
