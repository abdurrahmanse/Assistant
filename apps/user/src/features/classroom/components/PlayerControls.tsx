import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { ChevronLeft, ChevronRight, TerminalSquare } from 'lucide-react';
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
    <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" sx={{ mb: 4, pt: 2 }}>
      <Stack direction="row" alignItems="center" spacing={1.5} sx={{ mb: { xs: 2, sm: 0 } }}>
        <TerminalSquare size={24} color="#00a8ff" />
        <Typography variant="h4" fontWeight={700} sx={{ letterSpacing: '-0.02em' }}>{currentLesson?.title || ''}</Typography>
      </Stack>
      <Stack direction="row" spacing={2} sx={{ width: { xs: '100%', sm: 'auto' } }}>
        {currentLessonIndex > 0 ? (
          <Button variant="outline" startIcon={<ChevronLeft size={18} />} sx={{ borderRadius: '8px', flexGrow: { xs: 1, sm: 0 } }} onClick={onPrev}>Prev Node</Button>
        ) : null}
        
        {/* Next Lesson is ONLY available if the current lesson is completed */}
        {currentLesson.isCompleted && currentLessonIndex < totalLessons - 1 ? (
          <Button variant="primary" endIcon={<ChevronRight size={18} />} sx={{ borderRadius: '8px', flexGrow: { xs: 1, sm: 0 } }} onClick={onNext}>
            Execute Next Node
          </Button>
        ) : null}
      </Stack>
    </Stack>
  );
}
