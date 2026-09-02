import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CheckCircle2, ChevronDown, Circle, FileText, Lock, PlayCircle, FolderTree } from 'lucide-react';
import { brand } from '@repo/ui/shared-theme/themePrimitives';
import { alpha } from '@mui/material/styles';

import { PomodoroWidget } from './PomodoroWidget';
import type { CourseDetails, CourseLesson, CourseModule } from '@/interfaces';

interface CurriculumSidebarProps {
  course: CourseDetails;
  currentLesson: CourseLesson;
  onLessonSelect: (lesson: CourseLesson) => void;
  strictMode?: boolean;
}

export function CurriculumSidebar({ course, currentLesson, onLessonSelect, strictMode = true }: CurriculumSidebarProps) {
  
  const allLessons = course.modules?.flatMap((m: CourseModule) => m.lessons) || [];
  
  const isLessonLocked = (lesson: CourseLesson) => {
    if (!strictMode) return false;
    if (lesson.isCompleted) return false; 
    
    const currentIndex = allLessons.findIndex((l: CourseLesson) => l.id === lesson.id);
    const hasUncompletedPrevious = allLessons.slice(0, currentIndex).some((l: CourseLesson) => !l.isCompleted);
    return hasUncompletedPrevious;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      <Box sx={{ p: 3, pb: 0 }}>
        <PomodoroWidget />
      </Box>

      <Box sx={{ p: 3, pt: 1, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <FolderTree size={20} color={brand[500]} />
            <Typography variant="h6" fontWeight={700} sx={{ letterSpacing: '-0.02em' }}>Pipeline Modules</Typography>
          </Box>
          <Typography variant="caption" fontWeight={600} color={brand[500]} sx={{ bgcolor: alpha(brand[500], 0.1), px: 1, py: 0.5, borderRadius: '4px' }}>
            {`${course.progress}% Executed`}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {course.modules?.map((mod: CourseModule, idx: number) => (
          <Accordion 
            key={mod.id} 
            defaultExpanded={idx === 0 || idx === 1} 
            disableGutters 
            elevation={0} 
            sx={{ 
              '&:before': { display: 'none' }, 
              borderBottom: '1px solid', borderColor: 'divider', 
              bgcolor: 'background.paper',
              '&.Mui-expanded': { m: 0 }
            }}
          >
            <AccordionSummary expandIcon={<ChevronDown size={20} />} sx={{ bgcolor: 'background.default', py: 1 }}>
              <Typography variant="subtitle2" fontWeight={700} sx={{ letterSpacing: '-0.01em' }}>{mod.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              {mod.lessons.map((lesson: CourseLesson) => {
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
                      bgcolor: isActive ? alpha(brand[500], 0.08) : 'transparent',
                      borderLeft: '2px solid',
                      borderColor: isActive ? brand[500] : 'transparent',
                      opacity: locked ? 0.5 : 1,
                      transition: 'all 0.2s ease',
                      '&:hover': { bgcolor: locked ? 'transparent' : (isActive ? alpha(brand[500], 0.12) : alpha(brand[500], 0.04)) }
                    }}
                  >
                    <Box sx={{ mt: 0.5, color: lesson.isCompleted ? '#10b981' : (locked ? 'text.disabled' : brand[400]) }}>
                      {locked ? <Lock size={16} /> : (lesson.isCompleted ? <CheckCircle2 size={16} /> : <Circle size={16} />)}
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="body2" fontWeight={isActive ? 600 : 500} color={isActive ? brand[500] : 'text.primary'}>
                        {lesson.title}
                      </Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 0.5, letterSpacing: 0.5 }}>
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
