import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { CheckCircle2, ChevronDown, Circle, FileText, PlayCircle } from 'lucide-react';

import { PomodoroWidget } from './PomodoroWidget';

interface CurriculumSidebarProps {
  course: any;
  currentLesson: any;
  onLessonSelect: (lesson: any) => void;
}

export function CurriculumSidebar({ course, currentLesson, onLessonSelect }: CurriculumSidebarProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      <Box sx={{ p: 3, pb: 0 }}>
        <PomodoroWidget />
      </Box>

      <Box sx={{ p: 3, pt: 1, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Typography variant="h6" fontWeight={800} mb={1}>Course Curriculum</Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>{course.progress}% Completed</Typography>
        {/* Small progress bar */}
        <Box sx={{ width: '100%', height: 6, bgcolor: 'divider', borderRadius: 3, overflow: 'hidden' }}>
          <Box sx={{ width: `${course.progress}%`, height: '100%', bgcolor: 'primary.main' }} />
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
        {course.modules.map((mod: any, idx: number) => (
          <Accordion key={mod.id} defaultExpanded={idx === 0} disableGutters elevation={0} sx={{ '&:before': { display: 'none' }, borderBottom: '1px solid', borderColor: 'divider' }}>
            <AccordionSummary expandIcon={<ChevronDown size={20} />} sx={{ bgcolor: 'rgba(0,0,0,0.02)', py: 1 }}>
              <Typography variant="subtitle2" fontWeight={800}>{mod.title}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: 0 }}>
              {mod.lessons.map((lesson: any) => {
                const isActive = currentLesson?.id === lesson.id;
                return (
                  <Box 
                    key={lesson.id} 
                    onClick={() => onLessonSelect(lesson)}
                    sx={{ 
                      p: 2, pl: 3, 
                      display: 'flex', alignItems: 'flex-start', gap: 2,
                      cursor: 'pointer',
                      bgcolor: isActive ? 'primary.50' : 'transparent',
                      borderLeft: '4px solid',
                      borderColor: isActive ? 'primary.main' : 'transparent',
                      '&:hover': { bgcolor: isActive ? 'primary.50' : 'action.hover' }
                    }}
                  >
                    <Box sx={{ mt: 0.5, color: lesson.isCompleted ? 'success.main' : 'text.disabled' }}>
                      {lesson.isCompleted ? <CheckCircle2 size={18} /> : <Circle size={18} />}
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

