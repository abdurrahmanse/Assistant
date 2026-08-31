import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { ArrowLeft, PlayCircle, CheckCircle2, Circle } from 'lucide-react';
import { useParams, useNavigate } from 'react-router';
import { useLandingQuery } from '@/features/landing/hooks/queries/useLandingQuery';

export default function LearnPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data } = useLandingQuery();
  
  const course = data?.courses?.items?.find((c: any) => c.id.toString() === id) || {
    title: 'Advanced React Patterns',
  };

  const modules = [
    { title: '1. Introduction to the Course', completed: true },
    { title: '2. Environment Setup', completed: true },
    { title: '3. Core Fundamentals', completed: false, active: true },
    { title: '4. Component Architecture', completed: false },
    { title: '5. State Management', completed: false },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh', width: '100vw', overflow: 'hidden', bgcolor: 'background.default' }}>
      
      {/* Left Area - Video Player */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', bgcolor: '#000', position: 'relative' }}>
        <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2, position: 'absolute', top: 0, left: 0, zIndex: 10, width: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))' }}>
          <IconButton onClick={() => navigate('/dashboard')} sx={{ color: '#fff' }}>
            <ArrowLeft />
          </IconButton>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600 }}>{course.title}</Typography>
        </Box>
        
        {/* Mock Video Container */}
        <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <Box sx={{ textAlign: 'center', color: '#fff' }}>
            <PlayCircle size={80} opacity={0.8} style={{ marginBottom: 16 }} />
            <Typography variant="h5" fontWeight={700}>Core Fundamentals</Typography>
          </Box>
        </Box>
      </Box>

      {/* Right Area - Curriculum Sidebar */}
      <Box sx={{ width: { xs: '100%', md: '400px' }, display: { xs: 'none', md: 'flex' }, flexDirection: 'column', borderLeft: '1px solid', borderColor: 'divider', bgcolor: 'background.paper' }}>
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" fontWeight={800}>Course Content</Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>2 / 5 Lessons Completed</Typography>
        </Box>
        <Divider />
        <Box sx={{ overflowY: 'auto', flex: 1, p: 2 }}>
          <Stack spacing={1}>
            {modules.map((mod, i) => (
              <Box 
                key={i} 
                sx={{ 
                  p: 2, 
                  borderRadius: '12px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 2,
                  cursor: 'pointer',
                  bgcolor: mod.active ? (theme) => theme.palette.mode === 'dark' ? 'rgba(25, 118, 210, 0.15)' : 'primary.50' : 'transparent',
                  ''&:hover': { bgcolor: mod.active ? 'primary.50' : 'action.hover' }:hover': { bgcolor: mod.active ? (theme) => theme.palette.mode === 'dark' ? 'rgba(25, 118, 210, 0.15)' : 'primary.50' : 'action.hover' }
                }}
              >
                {mod.completed ? <CheckCircle2 size={20} color="green" /> : mod.active ? <PlayCircle size={20} color="blue" /> : <Circle size={20} color="gray" />}
                <Typography variant="body2" sx={{ fontWeight: mod.active ? 700 : 500, color: mod.active ? 'primary.main' : 'text.primary' }}>
                  {mod.title}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
        <Divider />
        <Box sx={{ p: 3 }}>
          <Button variant="contained" fullWidth size="large" sx={{ fontWeight: 800 }}>Next Lesson</Button>
        </Box>
      </Box>
    </Box>
  );
}
