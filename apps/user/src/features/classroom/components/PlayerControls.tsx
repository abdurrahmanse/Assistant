import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CourseLesson } from '@/interfaces';

interface PlayerControlsProps {
  currentLesson: CourseLesson;
  currentLessonIndex: number;
  totalLessons: number;
  onPrev: () => void;
  onNext: () => void;
}

export function PlayerControls({ currentLesson, currentLessonIndex, totalLessons, onPrev, onNext }: PlayerControlsProps) {
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
      <Typography variant="h4" fontWeight={900}>{currentLesson?.title || ''}</Typography>
      <Stack direction="row" spacing={2}>
        {currentLessonIndex > 0 ? (
          <Button variant="outline" startIcon={<ChevronLeft size={18} />} sx={{ borderRadius: '12px' }} onClick={onPrev}>Prev</Button>
        ) : null}
        
        {/* Next Lesson is ONLY available if the current lesson is completed */}
        {currentLesson.isCompleted && currentLessonIndex < totalLessons - 1 ? (
          <Button variant="primary" endIcon={<ChevronRight size={18} />} sx={{ borderRadius: '12px' }} onClick={onNext}>
            Next Lesson
          </Button>
        ) : null}
      </Stack>
    </Stack>
  );
}
