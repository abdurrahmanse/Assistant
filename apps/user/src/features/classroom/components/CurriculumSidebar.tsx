import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CheckCircle2, ChevronDown, Circle, FileText, Lock, PlayCircle } from 'lucide-react';

import { PomodoroWidget } from './PomodoroWidget';

interface CurriculumSidebarProps {
  course: any;
  currentLesson: any;
  onLessonSelect: (lesson: any) => void;
  strictMode?: boolean;
}

export function CurriculumSidebar({ course, currentLesson, onLessonSelect, strictMode = true }: CurriculumSidebarProps) {
  
  // Calculate if a lesson should be locked based on strict mode
  // A lesson is locked if it's NOT completed AND there is a previous lesson in the whole course that is NOT completed.
  const allLessons = course.modules.flatMap((m: any) => m.lessons);
  
  const isLessonLocked = (lesson: any) => {
    if (!strictMode) return false;
    if (lesson.isCompleted) return false; // completed lessons are never locked
    
    // Find the index of this lesson
    const currentIndex = allLessons.findIndex((l: any) => l.id === lesson.id);
    
    // Check if any previous lesson is uncompleted
    const hasUncompletedPrevious = allLessons.slice(0, currentIndex).some((l: any) => !l.isCompleted);
    return hasUncompletedPrevious;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      <Box sx={{ p: 3, pb: 0 }}>
        <PomodoroWidget />
      </Box>

      <Box sx={{ p: 3, pt: 1, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Box>
            <Typography variant="h6" fontWeight={800}>Curriculum</Typography>
            <Typography variant="body2" color="text.secondary">{`${course.progress}% Completed`}</Typography>
          </Box>
        </Box>
        {/* Small progress bar */}
        <Box sx={{ width: '100%', height: 6, bgcolor: 'divider', borderRadius: 3, overflow: 'hidden', mt: 2 }}>
          <Box sx={{ width: `${course.progress}%`, height: '100%', bgcolor: 'primary.main', transition: 'width 0.3s ease' }} />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {course.modules.map((mod: any, idx: number) => (
          <Accordion key={mod.id} defaultExpanded={idx === 0 || idx === 1} disableGutters elevation={0} sx={{ '&:before': { display: 'none' }, borderBottom: '1px solid', borderColor: 'divider' }}>
            <AccordionSummary expandIcon={<ChevronDown size={20} />} sx={{ bgcolor: 'rgba(0,0,0,0.02)', py: 1 }}>
              <Typography variant="subtitle2" fontWeight={800}>{mod.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              {mod.lessons.map((lesson: any) => {
                const isActive = currentLesson?.id === lesson.id;
                const locked = isLessonLocked(lesson);
                
                return (
                  <Box 
                    key={lesson.id} 
                    onClick={() => {
                      if (!locked) onLessonSelect(lesson);
                    }}
                    sx={{ 
                      p: 2, pl: 3, 
                      display: 'flex', alignItems: 'flex-start', gap: 2,
                      cursor: locked ? 'not-allowed' : 'pointer',
                      bgcolor: isActive ? 'primary.50' : 'transparent',
                      borderLeft: '4px solid',
                      borderColor: isActive ? 'primary.main' : 'transparent',
                      opacity: locked ? 0.5 : 1,
                      '&:hover': { bgcolor: locked ? 'transparent' : (isActive ? 'primary.50' : 'action.hover') }
                    }}
                  >
                    <Box sx={{ mt: 0.5, color: lesson.isCompleted ? 'success.main' : (locked ? 'text.disabled' : 'text.disabled') }}>
                      {locked ? <Lock size={18} /> : (lesson.isCompleted ? <CheckCircle2 size={18} /> : <Circle size={18} />)}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" fontWeight={isActive ? 700 : 500} color={isActive ? 'primary.main' : 'text.primary'}>
                        {lesson.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5 }}>
                        {lesson.type === 'video' ? <PlayCircle size={12} /> : <FileText size={12} />}
                        {lesson.duration}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

