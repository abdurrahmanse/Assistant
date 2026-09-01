import { mockEnrolledCourses, mockUser } from '@/data/mock';
import StudentLayout from '@/layouts/StudentLayout';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { Button, Badge as Chip } from '@repo/ui';
import { CheckCircle2, Play, PlayCircle, Clock, BookOpen, Award, TrendingUp, Activity, CheckCircle, FileText } from 'lucide-react';
import { useNavigate } from 'react-router';
import { BarChart } from '@mui/x-charts/BarChart';

export default function MyLearningPage() {
  const navigate = useNavigate();

  return (
    <StudentLayout>
      <Box sx={{ bgcolor: 'background.paper', borderBottom: '1px solid', borderColor: 'divider', pt: 8, pb: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" fontWeight={900} sx={{ letterSpacing: '-0.02em', mb: 1 }}>
            Welcome back, {mockUser.name.split(' ')[0]}! 👋
          </Typography>
          <Typography variant="h6" color="text.secondary" fontWeight={500}>
            Here's what's happening with your learning journey today.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 6 }}>
        
        {/* Stats Row */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {[
            { label: 'Learning Hours', value: '34h', icon: <Clock size={24} />, color: '#3b82f6' },
            { label: 'Courses Completed', value: '2', icon: <CheckCircle size={24} />, color: '#10b981' },
            { label: 'Certificates', value: '1', icon: <Award size={24} />, color: '#ec4899' },
            { label: 'Avg. Score', value: '92%', icon: <TrendingUp size={24} />, color: '#f59e0b' },
          ].map((stat, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <Paper variant="outlined" sx={{ p: 3, borderRadius: '20px', display: 'flex', alignItems: 'center', gap: 3, border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
                <Box sx={{ p: 2, borderRadius: '16px', bgcolor: `${stat.color}15`, color: stat.color, display: 'flex' }}>
                  {stat.icon}
                </Box>
                <Box>
                  <Typography variant="h4" fontWeight={900} sx={{ lineHeight: 1 }}>{stat.value}</Typography>
                  <Typography variant="caption" color="text.secondary" fontWeight={700} sx={{ textTransform: 'uppercase', letterSpacing: 1 }}>{stat.label}</Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {/* Chart Section */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper variant="outlined" sx={{ p: 4, height: '100%', borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)' }}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 4 }}>
                <Box>
                  <Typography variant="h6" fontWeight={800} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Activity size={20} color="var(--template-palette-primary-main)" /> Learning Activity
                  </Typography>
                  <Typography variant="body2" color="text.secondary">Hours spent learning over the last 7 days</Typography>
                </Box>
              </Stack>
              <Box sx={{ width: '100%', height: 280 }}>
                <BarChart
                  series={[{ data: [1.2, 2.5, 0.8, 4.2, 3.1, 1.5, 2.0], color: 'var(--template-palette-primary-main)' }]}
                  xAxis={[{ data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], scaleType: 'band' }]}
                  margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  borderRadius={8}
                />
              </Box>
            </Paper>
          </Grid>

          {/* Recent Activity Sidebar */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper variant="outlined" sx={{ p: 0, height: '100%', borderRadius: '24px', border: '2px solid', borderColor: 'divider', boxShadow: '4px 4px 0px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
                <Typography variant="h6" fontWeight={800}>Recent Activity</Typography>
              </Box>
              <Box sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
                
                <Stack direction="row" spacing={2}>
                  <Box sx={{ mt: 0.5, p: 1, borderRadius: '50%', bgcolor: 'success.50', color: 'success.main', height: 'fit-content' }}><CheckCircle2 size={16} /></Box>
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>Completed Module</Typography>
                    <Typography variant="body2" color="text.secondary">You finished "Foundations" in Next.js Masterclass.</Typography>
                    <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5, display: 'block' }}>2 hours ago</Typography>
                  </Box>
                </Stack>
                <Divider />

                <Stack direction="row" spacing={2}>
                  <Box sx={{ mt: 0.5, p: 1, borderRadius: '50%', bgcolor: 'warning.50', color: 'warning.main', height: 'fit-content' }}><FileText size={16} /></Box>
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>Assignment Graded</Typography>
                    <Typography variant="body2" color="text.secondary">"Build a Tailwind Dashboard" got a 95/100.</Typography>
                    <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5, display: 'block' }}>Yesterday</Typography>
                  </Box>
                </Stack>
                <Divider />

                <Stack direction="row" spacing={2}>
                  <Box sx={{ mt: 0.5, p: 1, borderRadius: '50%', bgcolor: 'primary.50', color: 'primary.main', height: 'fit-content' }}><Award size={16} /></Box>
                  <Box>
                    <Typography variant="subtitle2" fontWeight={700}>New Badge Earned</Typography>
                    <Typography variant="body2" color="text.secondary">You earned the "Fast Learner" badge.</Typography>
                    <Typography variant="caption" color="text.disabled" sx={{ mt: 0.5, display: 'block' }}>3 days ago</Typography>
                  </Box>
                </Stack>

              </Box>
              <Button variant="ghost" fullWidth sx={{ p: 2, borderTop: '1px solid', borderColor: 'divider', borderRadius: '0 0 24px 24px' }}>
                View All Activity
              </Button>
            </Paper>
          </Grid>
        </Grid>

        <Typography variant="h5" fontWeight={900} sx={{ mb: 4, letterSpacing: '-0.02em', display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <BookOpen size={24} color="var(--template-palette-primary-main)" /> Continue Learning
        </Typography>

        <Grid container spacing={4}>
          {mockEnrolledCourses.map((course) => (
            <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={course.id}>
              
              <Box 
                onClick={() => navigate(`/courses/${course.id}`)} 
                sx={(theme) => ({
                  height: '100%', display: 'flex', flexDirection: 'column',
                  borderRadius: '24px', 
                  border: '2px solid', 
                  borderColor: 'rgba(0,0,0,0.1)',
                  bgcolor: 'rgba(255,255,255,0.6)',
                  ...theme.applyStyles('dark', { borderColor: 'rgba(255,255,255,0.1)', bgcolor: 'rgba(20,20,25,0.6)' }),
                  backdropFilter: 'blur(24px)',
                  cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)', overflow: 'hidden',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateY(-8px) rotate(-1deg)',
                    boxShadow: '8px 8px 0px rgba(99,102,241,1)',
                    borderColor: 'primary.main',
                    '& .course-thumbnail': { transform: 'scale(1.08) rotate(1deg)' },
                    '& .course-icon': { transform: 'scale(1.1) translateY(-4px)' }
                  }
              })}>
                
                <Box sx={{ width: '100%', aspectRatio: '16/9', position: 'relative', overflow: 'hidden', p: 1.5 }}>
                  <Box sx={{ width: '100%', height: '100%', borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
                    <Box component="img" src={course.thumbnail} alt={course.title} className="course-thumbnail" sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' }} />
                  </Box>
                  
                  {/* Progress Badge */}
                  <Box sx={{ position: 'absolute', top: 24, right: 24, display: 'flex', gap: 1 }}>
                    <Chip 
                      icon={course.progress === 100 ? <CheckCircle2 size={14} style={{ color: '#000' }} /> : <PlayCircle size={14} style={{ color: '#000' }} />} 
                      label={course.progress === 100 ? 'Completed' : 'In Progress'} 
                      size="small" 
                      sx={{ 
                        fontWeight: 900, borderRadius: '8px', 
                        bgcolor: course.progress === 100 ? '#10b981' : '#f59e0b', color: '#000',
                        border: '2px solid #000', boxShadow: '2px 2px 0px #000',
                        textTransform: 'uppercase', letterSpacing: 0.5
                      }} 
                    />
                  </Box>
                  
                  {/* Playful Floating Icon */}
                  <Box className="course-icon" sx={{ 
                    position: 'absolute', bottom: -8, left: 24, p: 1.5, 
                    borderRadius: '16px', bgcolor: 'primary.main', color: 'primary.contrastText', 
                    display: 'flex', border: '2px solid #000', boxShadow: '4px 4px 0px #000',
                    transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                  }}>
                    <Play size={24} />
                  </Box>
                </Box>

                <Box sx={{ p: 3, pt: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, mb: 1 }}>
                    {course.instructor}
                  </Typography>
                  
                  <Typography variant="h5" sx={{ fontWeight: 900, mb: 1.5, lineHeight: 1.2, letterSpacing: '-0.02em' }}>{course.title}</Typography>
                  
                  <Box sx={{ mt: 'auto', mb: 3 }}>
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                      <Typography variant="body2" fontWeight={800} color={course.progress === 100 ? 'success.main' : 'primary.main'}>
                        {course.progress}%
                      </Typography>
                      <Typography variant="caption" color="text.secondary" fontWeight={700}>
                        {course.completedLessons} / {course.totalLessons} lessons
                      </Typography>
                    </Stack>
                    <LinearProgress 
                      variant="determinate" 
                      value={course.progress} 
                      color={course.progress === 100 ? 'success' : 'primary'}
                      sx={{ height: 8, borderRadius: 4, bgcolor: 'divider', '& .MuiLinearProgress-bar': { borderRadius: 4 } }}
                    />
                  </Box>

                  <Button 
                    variant={course.progress === 100 ? "outline" : "primary"} 
                    fullWidth 
                  >
                    {course.progress === 100 ? 'Review Course' : (course.progress === 0 ? 'Start Course' : 'Continue Learning')}
                  </Button>
                </Box>
              </Box>

            </Grid>
          ))}
        </Grid>
      </Container>
    </StudentLayout>
  );
}
