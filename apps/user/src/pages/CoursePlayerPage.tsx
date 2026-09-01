import { mockCourseDetails } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { Button } from '@repo/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';

// Classroom Components
import { CourseHeader } from '@/features/classroom/components/CourseHeader';
import { CurriculumSidebar } from '@/features/classroom/components/CurriculumSidebar';
import { NotesTab } from '@/features/classroom/components/NotesTab';
import { OverviewTab } from '@/features/classroom/components/OverviewTab';
import { QAndATab } from '@/features/classroom/components/QAndATab';
import { ResourcesTab } from '@/features/classroom/components/ResourcesTab';
import { ReviewFeedbackTab } from '@/features/classroom/components/ReviewFeedbackTab';
import { VideoPlayer } from '@/features/classroom/components/VideoPlayer';

export default function CoursePlayerPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // In a real app, fetch course by slug using a custom hook (e.g. useQuery). 
  // We use mock data for now.
  const course = mockCourseDetails;
  
  // SECURITY: Enrollment Guard
  // In a real app, we check the backend to see if the user owns this course.
  // For demonstration, we simulate that the user owns the course. 
  // Change to false to see the redirect to checkout!
  const hasAccessToCourse = true;

  if (!hasAccessToCourse) {
    // Redirect them to the checkout page if they haven't paid or aren't subscribed!
    return <Navigate to={`/checkout?course=${slug}`} state={{ from: location }} replace />;
  }
  
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
        
        <CourseHeader title={course.title} onBack={() => navigate('/home')} />

        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4, display: 'flex', flexDirection: 'column' }}>
          <Grid container spacing={4} sx={{ flexGrow: 1 }}>
            
            {/* Left: Player & Tabs */}
            <Grid size={{ xs: 12, lg: 8 }} sx={{ display: 'flex', flexDirection: 'column' }}>
              
              <VideoPlayer currentLesson={currentLesson} />

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
                  <Tab label="Notes" sx={{ fontWeight: 700 }} />
                  <Tab label="Downloads & Resources" sx={{ fontWeight: 700 }} />
                  <Tab label="Reviews & Feedback" sx={{ fontWeight: 700 }} />
                  <Tab label="Q&A Discussions" sx={{ fontWeight: 700 }} />
                </Tabs>
                <Box sx={{ p: 4, minHeight: 300, bgcolor: 'background.paper' }}>
                  {activeTab === 0 && <OverviewTab />}
                  {activeTab === 1 && <NotesTab />}
                  {activeTab === 2 && <ResourcesTab resources={course.resources} />}
                  {activeTab === 3 && <ReviewFeedbackTab />}
                  {activeTab === 4 && <QAndATab />}
                </Box>
              </Paper>
            </Grid>

            {/* Right: Curriculum Sidebar */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <Paper variant="outlined" sx={{ borderRadius: '16px', height: '100%', maxHeight: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>
                <CurriculumSidebar course={course} currentLesson={currentLesson} onLessonSelect={handleLessonSelect} />
              </Paper>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    </StudentLayout>
  );
}
