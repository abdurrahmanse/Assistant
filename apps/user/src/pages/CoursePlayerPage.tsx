import React, { useState } from 'react';
import StudentLayout from '@/layouts/StudentLayout';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Button } from '@repo/ui';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { PlayCircle, CheckCircle2, Circle, ChevronDown, Download, FileText, Lock, ChevronLeft, ChevronRight } from 'lucide-react';
import { mockCourseDetails } from '@/data/mock';
import { useParams, useNavigate } from 'react-router';

export default function CoursePlayerPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  // In a real app, fetch course by ID. We use mock data for now.
  const course = mockCourseDetails;
  
  // Find first uncompleted video as default, or fallback to first
  const defaultLesson = course.modules[0]?.lessons[0] as any;
  const [currentLesson, setCurrentLesson] = useState(defaultLesson);
  const [activeTab, setActiveTab] = useState(0);

  const handleLessonSelect = (lesson: any) => {
    if (lesson.type === 'video' || lesson.type === 'quiz') {
      setCurrentLesson(lesson);
    }
  };

  return (
    <StudentLayout>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
        
        {/* Top Header / Breadcrumb Area */}
        <Box sx={{ py: 2, px: 4, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button startIcon={<ChevronLeft size={16} />} onClick={() => navigate('/home')} sx={{ color: 'text.secondary' }}>Back to Learning</Button>
            <Divider orientation="vertical" flexItem sx={{ height: 24, alignSelf: 'center' }} />
            <Typography variant="subtitle1" fontWeight={800}>{course.title}</Typography>
          </Stack>
        </Box>

        <Container maxWidth="xl" sx={{ flexGrow: 1, py: 4, display: 'flex', flexDirection: 'column' }}>
          <Grid container spacing={4} sx={{ flexGrow: 1 }}>
            
            {/* Left: Player & Tabs */}
            <Grid size={{ xs: 12, lg: 8 }} sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ 
                width: '100%', 
                aspectRatio: '16/9', 
                bgcolor: 'black', 
                borderRadius: '16px',
                overflow: 'hidden',
                mb: 4,
                boxShadow: '0 12px 32px rgba(0,0,0,0.2)'
              }}>
                {currentLesson?.videoUrl ? (
                  <video 
                    src={currentLesson.videoUrl} 
                    controls 
                    autoPlay 
                    style={{ width: '100%', height: '100%' }}
                  />
                ) : (
                  <Box sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                    <Typography variant="h6">No video available for this lesson type.</Typography>
                  </Box>
                )}
              </Box>

              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                <Typography variant="h4" fontWeight={900}>{currentLesson?.title}</Typography>
                <Stack direction="row" spacing={2}>
                  <Button variant="outline" startIcon={<ChevronLeft size={18} />} sx={{ borderRadius: '12px' }}>Prev</Button>
                  <Button variant="primary" endIcon={<ChevronRight size={18} />} sx={{ borderRadius: '12px' }}>Next Lesson</Button>
                </Stack>
              </Stack>

              <Paper variant="outlined" sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
                  <Tab label="Overview" sx={{ fontWeight: 700 }} />
                  <Tab label="Downloads & Resources" sx={{ fontWeight: 700 }} />
                </Tabs>
                <Box sx={{ p: 4, minHeight: 300, bgcolor: 'background.paper' }}>
                  {activeTab === 0 && (
                    <Typography variant="body1" color="text.secondary" lineHeight={1.7}>
                      Welcome to this lesson! In this video, we will cover the foundational concepts you need to succeed. Make sure to follow along with the source code provided in the resources tab.
                    </Typography>
                  )}
                  {activeTab === 1 && (
                    <Stack spacing={2}>
                      {course.resources.map(res => (
                        <Stack key={res.id} direction="row" alignItems="center" justifyContent="space-between" sx={{ p: 2, border: '1px solid', borderColor: 'divider', borderRadius: '12px' }}>
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Box sx={{ p: 1, bgcolor: 'primary.50', color: 'primary.main', borderRadius: '8px' }}>
                              <FileText size={20} />
                            </Box>
                            <Box>
                              <Typography variant="subtitle2" fontWeight={700}>{res.title}</Typography>
                              <Typography variant="caption" color="text.secondary">{res.size}</Typography>
                            </Box>
                          </Stack>
                          <Button startIcon={<Download size={16} />} variant="outline" size="small" sx={{ borderRadius: '8px' }}>Download</Button>
                        </Stack>
                      ))}
                    </Stack>
                  )}
                </Box>
              </Paper>
            </Grid>

            {/* Right: Curriculum Sidebar */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <Paper variant="outlined" sx={{ borderRadius: '16px', height: '100%', maxHeight: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
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
                              onClick={() => handleLessonSelect(lesson)}
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
              </Paper>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    </StudentLayout>
  );
}
