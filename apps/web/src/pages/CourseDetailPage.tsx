import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { PlayCircle, CheckCircle2, ChevronDown, Clock, Award, Users, BookOpen } from 'lucide-react';
import MarketingLayout from '@/layouts/MarketingLayout';
import { useParams, useNavigate } from 'react-router';
import { useLandingQuery } from '@/features/landing/hooks/queries/useLandingQuery';

export default function CourseDetailPage(props: { disableCustomTheme?: boolean }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useLandingQuery();
  
  const course = data?.courses?.items?.find((c: any) => c.id.toString() === id) || {
    title: 'Advanced React Patterns',
    type: 'Premium',
    price: '$49',
    level: 'Advanced',
    description: 'Master custom hooks, Suspense, and performance optimization for enterprise scale.',
  };

  return (
    <MarketingLayout disableCustomTheme={props.disableCustomTheme}>
      {/* Course Hero Section - Neo Brutalist + Glassmorphism */}
      <Box sx={{ pt: { xs: 14, sm: 20 }, pb: { xs: 8, sm: 12 }, background: (theme) => theme.palette.mode === 'dark' ? 'linear-gradient(135deg, rgba(15,23,42,1) 0%, rgba(30,41,59,1) 100%)' : 'linear-gradient(135deg, rgba(238,242,255,1) 0%, rgba(224,231,255,1) 100%)' }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={6} alignItems="center">
            <Box sx={{ flex: 1 }}>
              <Chip label={course.type} color={course.type === 'Free' ? 'success' : 'primary'} sx={{ fontWeight: 800, mb: 3, borderRadius: '4px' }} />
              <Typography variant="h1" sx={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4rem)', mb: 3, lineHeight: 1.1 }}>
                {course.title}
              </Typography>
              <Typography variant="h5" color="text.secondary" sx={{ mb: 4, lineHeight: 1.6 }}>
                {course.description}
              </Typography>
              <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Clock size={20} /> <Typography fontWeight={600}>12 Hours</Typography></Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Award size={20} /> <Typography fontWeight={600}>Certificate</Typography></Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}><Users size={20} /> <Typography fontWeight={600}>1.2k Students</Typography></Box>
              </Stack>
            </Box>

            {/* Floating Enrollment Card */}
            <Box sx={(theme) => ({ width: { xs: '100%', md: '400px' }, p: 4, borderRadius: '24px', bgcolor: theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.7)' : 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(24px)', border: '2px solid', borderColor: theme.palette.text.primary, boxShadow: `8px 8px 0px ${theme.palette.text.primary}`, transition: 'all 0.2s', 'sx={{ width: { xs: '100%', md: '400px' }, p: 4, borderRadius: '24px', background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(24px)', border: '2px solid #000', boxShadow: '8px 8px 0px #000', transition: 'all 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '12px 12px 0px #000' } }}:hover': { transform: 'translateY(-4px)', boxShadow: `12px 12px 0px ${theme.palette.text.primary}` } })}>
              <Typography variant="h2" sx={{ fontWeight: 900, mb: 1 }}>{course.price}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>One-time payment. Lifetime access.</Typography>
              <Button variant="contained" size="large" fullWidth sx={{ fontWeight: 900, py: 2, fontSize: '1.1rem', borderRadius: '8px', bgcolor: 'text.primary', color: 'background.default', 'bgcolor: '#000', color: '#fff', '&:hover': { bgcolor: '#333' }:hover': { bgcolor: 'text.secondary' } }}>
                Enroll Now
              </Button>
              <Divider sx={{ my: 3 }} />
              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>This course includes:</Typography>
              <Stack spacing={1.5}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}><PlayCircle size={18} /> <Typography variant="body2">45 Video Lessons</Typography></Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}><BookOpen size={18} /> <Typography variant="body2">20 Interactive Exercises</Typography></Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}><CheckCircle2 size={18} /> <Typography variant="body2">Real-world Capstone Project</Typography></Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Course Content Section */}
      <Box sx={{ py: { xs: 8, sm: 12 }, bgcolor: 'background.default' }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 6 }}>Curriculum Modules</Typography>
          
          <Stack spacing={2}>
            {[
              { title: 'Module 1: Introduction & Environment Setup', lessons: '4 lessons • 45m' },
              { title: 'Module 2: Core Fundamentals', lessons: '8 lessons • 2h 15m' },
              { title: 'Module 3: Advanced Architectures', lessons: '12 lessons • 4h 30m' },
              { title: 'Module 4: Performance & Optimization', lessons: '6 lessons • 1h 45m' },
              { title: 'Module 5: Final Capstone Project', lessons: '1 project • 3h' },
            ].map((mod, i) => (
              <Accordion key={i} elevation={0} sx={{ border: '1px solid', borderColor: 'divider', borderRadius: '12px !important', '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ChevronDown />} sx={{ py: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', pr: 2, alignItems: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>{mod.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' } }}>{mod.lessons}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: 'action.hover' }}>
                  <Stack spacing={2} sx={{ pt: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}><PlayCircle size={16} /> <Typography variant="body2">Understanding the prerequisites</Typography></Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}><PlayCircle size={16} /> <Typography variant="body2">Setting up your local environment</Typography></Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}><PlayCircle size={16} /> <Typography variant="body2">Your first 'Hello World'</Typography></Box>
                  </Stack>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Container>
      </Box>
    </MarketingLayout>
  );
}
