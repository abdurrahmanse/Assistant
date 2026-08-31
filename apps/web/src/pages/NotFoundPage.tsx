import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Home, Compass } from 'lucide-react';
import { useNavigate } from 'react-router';
import { PageSection } from '@/components/PageSection';
import MarketingLayout from '@/layouts/MarketingLayout';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <MarketingLayout>
      <PageSection sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center', py: 10, position: 'relative' }}>
        {/* Background glowing shape */}
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: { xs: 300, md: 500 }, aspectRatio: '1',
          background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 0, pointerEvents: 'none'
        }} />

        <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h1" sx={{ 
            fontWeight: 900, 
            fontSize: 'clamp(6rem, 15vw, 12rem)', 
            lineHeight: 1, 
            background: 'linear-gradient(135deg, #6366f1, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            opacity: 0.9,
            mb: 2
          }}>
            404
          </Typography>
          
          <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }}>
            Lost in Space?
          </Typography>
          
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 460, mb: 6, lineHeight: 1.6 }}>
            The page you're looking for doesn't exist or has been moved to another orbit. Let's get you back on track.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button 
              variant="contained" 
              size="small" 
              startIcon={<Home size={20} />}
              onClick={() => navigate('/')}
              sx={{ fontWeight: 800, py: 1.5, px: 4, borderRadius: '12px', textTransform: 'none' }}
            >
              Back to Home
            </Button>
            <Button 
              variant="outlined" 
              size="small" 
              startIcon={<Compass size={20} />}
              onClick={() => navigate('/courses')}
              sx={{ fontWeight: 700, py: 1.5, px: 4, borderRadius: '12px', textTransform: 'none', bgcolor: 'background.paper' }}
            >
              Explore Courses
            </Button>
          </Stack>
        </Box>
      </PageSection>
    </MarketingLayout>
  );
}
