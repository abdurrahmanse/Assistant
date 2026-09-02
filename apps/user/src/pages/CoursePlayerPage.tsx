import { mockCourseDetails } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import React, { useState, Suspense, lazy } from 'react';
import type { CourseDetails, CourseModule, CourseLesson, Resource } from '@/interfaces';
import { Navigate, useLocation, useNavigate, useParams } from 'react-router';

// Classroom Components
import { CourseHeader } from '@/features/classroom/components/CourseHeader';
import { CurriculumSidebar } from '@/features/classroom/components/CurriculumSidebar';
import CircularProgress from '@mui/material/CircularProgress';
import { ErrorBoundary } from '@repo/ui/components/ErrorBoundary';
const VideoPlayer = lazy(() => import('@/features/classroom/components/VideoPlayer').then(m => ({ default: m.VideoPlayer })));
import { PlayerTabs } from '@/features/classroom/components/PlayerTabs';
import { PlayerControls } from '@/features/classroom/components/PlayerControls';

export default function CoursePlayerPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // In a real app, fetch course by slug using a custom hook (e.g. useQuery). 
  // We use mock data for now.
  const course = mockCourseDetails as CourseDetails;
  
  // SECURITY: Enrollment Guard
  const hasAccessToCourse = true;

  if (!hasAccessToCourse) {
    return <Navigate to={`/checkout?course=${slug}`} state={{ from: location }} replace />;
  }
  
  const defaultLesson = course.modules?.[0]?.lessons[0] as CourseLesson;
  const [currentLesson, setCurrentLesson] = useState(defaultLesson);
  const [activeTab, setActiveTab] = useState(0);
  const [localCourse, setLocalCourse] = useState(course);

  const allLessons = localCourse.modules?.flatMap((m: CourseModule) => m.lessons) || [];
  const currentLessonIndex = allLessons.findIndex((l: CourseLesson) => l.id === currentLesson.id);

  const handleLessonSelect = (lesson: CourseLesson) => {
    if (lesson.type === 'video' || lesson.type === 'quiz') {
      setCurrentLesson(lesson);
    }
  };

  const handleNextLesson = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      setCurrentLesson(allLessons[currentLessonIndex + 1]);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      setCurrentLesson(allLessons[currentLessonIndex - 1]);
    }
  };

  const markCurrentLessonComplete = () => {
    if (currentLesson.isCompleted) return;
    
    const updatedModules = localCourse.modules?.map((m: CourseModule) => ({
      ...m,
      lessons: m.lessons.map((l: CourseLesson) => l.id === currentLesson.id ? { ...l, isCompleted: true } : l)
    })) || [];
    
    const totalLessons = allLessons.length;
    const completedLessons = updatedModules.flatMap((m: CourseModule) => m.lessons).filter((l: CourseLesson) => l.isCompleted).length;
    const newProgress = Math.round((completedLessons / totalLessons) * 100);

    setLocalCourse({ ...localCourse, modules: updatedModules, progress: newProgress });
    setCurrentLesson({ ...currentLesson, isCompleted: true });
    
    handleNextLesson();
  };

  return (
    <StudentLayout>
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', bgcolor: 'background.default' }}>
        
        <CourseHeader title={localCourse.title} onBack={() => navigate('/home')} />

        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4, display: 'flex', flexDirection: 'column' }}>
          <Grid container spacing={4} sx={{ flexGrow: 1 }}>
            
            {/* Left: Player & Tabs */}
            <Grid size={{ xs: 12, lg: 8 }} sx={{ display: 'flex', flexDirection: 'column' }}>
              
              <ErrorBoundary>
                <Suspense fallback={
                  <Box sx={{ width: '100%', aspectRatio: '16/9', bgcolor: 'black', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
                    <CircularProgress sx={{ color: 'white' }} />
                  </Box>
                }>
                  <VideoPlayer currentLesson={currentLesson} onVideoEnd={markCurrentLessonComplete} />
                </Suspense>
              </ErrorBoundary>

              <PlayerControls 
                currentLesson={currentLesson} 
                currentLessonIndex={currentLessonIndex} 
                totalLessons={allLessons.length} 
                onPrev={handlePrevLesson} 
                onNext={handleNextLesson} 
              />

              <Paper variant="outlined" sx={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>
                <PlayerTabs 
                  activeTab={activeTab} 
                  onTabChange={(e, v) => setActiveTab(v)} 
                  resources={localCourse.resources || []} 
                />
              </Paper>
            </Grid>

            {/* Right: Curriculum Sidebar */}
            <Grid size={{ xs: 12, lg: 4 }}>
              <Paper variant="outlined" sx={{ borderRadius: '16px', height: '100%', maxHeight: 'calc(100vh - 160px)', display: 'flex', flexDirection: 'column', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>
                <CurriculumSidebar 
                  course={localCourse} 
                  currentLesson={currentLesson} 
                  onLessonSelect={handleLessonSelect} 
                  strictMode={true}
                />
              </Paper>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
    </StudentLayout>
  );
}
