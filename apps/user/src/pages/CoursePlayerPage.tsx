import { mockCourseDetails } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Circle, Download, FileText, MessageCircle, MessageSquareHeart, PlayCircle, Search, ThumbsUp } from 'lucide-react';
import { Plyr } from 'plyr-react';
import 'plyr-react/plyr.css';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export default function CoursePlayerPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  // In a real app, fetch course by slug. We use mock data for now.
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
        <Box sx={{ py: 2, borderBottom: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
          <Container maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Button startIcon={<ChevronLeft size={16} />} onClick={() => navigate('/home')} sx={{ color: 'text.secondary', p: 0, '&:hover': { bgcolor: 'transparent', color: 'primary.main' } }}>Back to Learning</Button>
              <Divider orientation="vertical" flexItem sx={{ height: 24, alignSelf: 'center' }} />
              <Typography variant="subtitle1" fontWeight={800}>{course.title}</Typography>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4, display: 'flex', flexDirection: 'column' }}>
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
                boxShadow: '8px 8px 0px rgba(0,0,0,1)', border: '4px solid #000',
                '& .plyr': {
                  height: '100%',
                  '--plyr-color-main': '#6366f1', // primary color
                }
              }}>
                {currentLesson?.videoUrl ? (
                  <Plyr
                    source={{
                      type: 'video',
                      sources: [{ src: currentLesson.videoUrl, provider: 'html5' }],
                    }}
                    options={{
                      autoplay: true,
                      controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen'],
                    }}
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

              <Paper variant="outlined" sx={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>
                <Tabs value={activeTab} onChange={(e, v) => setActiveTab(v)} sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'background.paper' }}>
                  <Tab label="Overview" sx={{ fontWeight: 700 }} />
                  <Tab label="Downloads & Resources" sx={{ fontWeight: 700 }} />
                  <Tab label="Reviews & Feedback" sx={{ fontWeight: 700 }} />
                  <Tab label="Q&A Discussions" sx={{ fontWeight: 700 }} />
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
                  {activeTab === 2 && (
                    <Box>
                      <Typography variant="h6" fontWeight={800} mb={1}>How would you rate this course?</Typography>
                      <Typography variant="body2" color="text.secondary" mb={3}>Your feedback helps us improve the learning experience.</Typography>
                      
                      <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: '16px', bgcolor: 'background.default' }}>
                        <Typography variant="subtitle2" fontWeight={700} mb={1}>Course Rating</Typography>
                        <Rating name="course-rating" defaultValue={0} size="large" sx={{ mb: 3 }} />
                        
                        <Typography variant="subtitle2" fontWeight={700} mb={1}>Written Feedback</Typography>
                        <TextField 
                          fullWidth 
                          multiline 
                          rows={4} 
                          placeholder="Tell us what you thought about this course. What was great? What could be improved?" 
                          variant="outlined" 
                          sx={{ mb: 3, '& .MuiOutlinedInput-root': { borderRadius: '12px', bgcolor: 'background.paper' } }}
                        />
                        
                        <Button variant="primary" startIcon={<MessageSquareHeart size={18} />}>
                          Submit Feedback
                        </Button>
                      </Box>
                    </Box>
                  )}
                  {activeTab === 3 && (
                    <Box>
                      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={3}>
                        <Box>
                          <Typography variant="h6" fontWeight={800}>Q&A Discussions</Typography>
                          <Typography variant="body2" color="text.secondary">142 questions in this course</Typography>
                        </Box>
                        <Button variant="primary" startIcon={<MessageCircle size={16} />}>Ask a Question</Button>
                      </Stack>
                      
                      <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                        <TextField 
                          fullWidth 
                          placeholder="Search for questions..." 
                          variant="outlined" 
                          size="small"
                          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '12px', bgcolor: 'background.default' } }}
                        />
                        <Button variant="outline" sx={{ px: 3, borderRadius: '12px' }}><Search size={18} /></Button>
                      </Box>
                      
                      <Stack spacing={3}>
                        {[
                          { name: 'Sarah Jenkins', avatar: 'https://i.pravatar.cc/150?u=sarah', question: 'How do I resolve the "useEffect" infinite loop in this example?', responses: 4, upvotes: 12, time: '2 hours ago' },
                          { name: 'Mike Rodriguez', avatar: 'https://i.pravatar.cc/150?u=mike', question: 'Is the source code for this specific module available?', responses: 1, upvotes: 3, time: '1 day ago' },
                        ].map((q, i) => (
                          <Box key={i} sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: '16px', bgcolor: 'background.default' }}>
                            <Stack direction="row" spacing={2} mb={2}>
                              <Avatar src={q.avatar} sx={{ width: 40, height: 40 }} />
                              <Box>
                                <Typography variant="subtitle2" fontWeight={800}>{q.name}</Typography>
                                <Typography variant="caption" color="text.secondary">{q.time}</Typography>
                              </Box>
                            </Stack>
                            <Typography variant="body1" fontWeight={600} mb={2}>{q.question}</Typography>
                            
                            <Stack direction="row" spacing={3} alignItems="center">
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                                <ThumbsUp size={16} />
                                <Typography variant="body2" fontWeight={700}>{q.upvotes}</Typography>
                              </Box>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary', cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>
                                <MessageCircle size={16} />
                                <Typography variant="body2" fontWeight={700}>{q.responses} Responses</Typography>
                              </Box>
                            </Stack>
                          </Box>
                        ))}
                      </Stack>
                    </Box>
                  )}
                </Box>
              </Paper>
            </Grid>

            {/* Right: Curriculum Sidebar */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <Paper variant="outlined" sx={{ borderRadius: '16px', height: '100%', maxHeight: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>
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
